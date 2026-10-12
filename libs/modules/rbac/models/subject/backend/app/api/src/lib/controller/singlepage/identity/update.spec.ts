jest.mock("@sps/shared-utils", () => ({
  RBAC_JWT_SECRET: "test-jwt",
  RBAC_SECRET_KEY: "test-key",
}));
jest.mock("hono/jwt", () => ({
  verify: jest.fn(async () => ({ subject: { id: "owner" } })),
}));
jest.mock("@sps/backend-utils", () => ({
  authorization: () => "test-token",
  getHttpErrorType: (error: Error) => ({
    status: 400,
    message: error.message,
    details: {},
  }),
}));
const mockUpdate = jest.fn();
const mockPassword = jest.fn();
jest.mock("@sps/rbac/models/identity/sdk/server", () => ({
  api: {
    update: (props: any) => mockUpdate(props),
    changePassword: (props: any) => mockPassword(props),
  },
}));
jest.mock("@sps/shared-backend-api", () => ({
  applyOutputSchema: ({ data }: any) => {
    const { password, salt, resetPasswordCode, ...safe } = data;
    return safe;
  },
}));
import { Handler } from "./update";

function fixture(
  data: Record<string, unknown>,
  subjectId = "owner",
  linked = true,
) {
  const identity = {
    id: "identity",
    provider: "email_and_password",
    email: "old@example.com",
    password: "hashed",
    salt: "salt",
    resetPasswordCode: "code",
  };
  mockUpdate.mockImplementation(async ({ data: patch }) =>
    Object.assign(identity, patch),
  );
  mockPassword.mockImplementation(async () =>
    Object.assign(identity, { password: "new-hash" }),
  );
  const service = {
    subjectsToIdentities: {
      find: jest.fn(async () =>
        linked ? [{ subjectId: "owner", identityId: "identity" }] : [],
      ),
    },
    identity: { findById: jest.fn(async () => identity) },
  };
  const context = {
    req: {
      param: (name: string) => (name === "uuid" ? subjectId : "identity"),
      parseBody: async () => ({ data: JSON.stringify(data) }),
    },
    json: jest.fn((value) => value),
  };
  return { handler: new Handler(service as any), context, identity };
}
beforeEach(() => jest.clearAllMocks());

it("requires the verification flow instead of changing email directly", async () => {
  const { handler, context } = fixture({ email: "new@example.com" });
  await expect(handler.execute(context, jest.fn())).rejects.toThrow(
    "Verify your current and new email",
  );
  expect(mockUpdate).not.toHaveBeenCalled();
});

it("returns a safe identity instead of echoing submitted passwords", async () => {
  const { handler, context } = fixture({
    password: "current-password",
    newPassword: "next-password",
  });
  await handler.execute(context as any, undefined);
  expect(mockPassword).toHaveBeenCalledWith(
    expect.objectContaining({
      data: { password: "current-password", newPassword: "next-password" },
    }),
  );
  expect(context.json.mock.calls[0][0].data).toEqual({
    id: "identity",
    provider: "email_and_password",
    email: "old@example.com",
  });
});

it.each([
  { provider: "admin" },
  { email: "bad" },
  { newPassword: "next-password" },
  { password: "current-password", newPassword: "short" },
])("rejects invalid or unsupported account patches: %j", async (data) => {
  const { handler, context } = fixture(data);
  await expect(handler.execute(context as any, undefined)).rejects.toThrow(
    "Validation error",
  );
  expect(mockUpdate).not.toHaveBeenCalled();
  expect(mockPassword).not.toHaveBeenCalled();
});

it("rejects another Subject before any credential mutation", async () => {
  const { handler, context } = fixture({ email: "new@example.com" }, "foreign");
  await expect(handler.execute(context as any, undefined)).rejects.toThrow(
    "Only identity owner",
  );
  expect(mockUpdate).not.toHaveBeenCalled();
});

it("rejects an identity not linked to the requesting owner", async () => {
  const { handler, context } = fixture(
    { email: "new@example.com" },
    "owner",
    false,
  );
  await expect(handler.execute(context as any, undefined)).rejects.toThrow(
    "No subjects to identities",
  );
  expect(mockUpdate).not.toHaveBeenCalled();
});
