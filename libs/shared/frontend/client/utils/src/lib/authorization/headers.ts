export function util() {
  const authorization = localStorage.getItem("rbac.subject.jwt");
  const secretKey = localStorage.getItem("rbac.secret-key");

  const headers: HeadersInit = {};

  if (authorization) {
    headers.Authorization = "Bearer " + authorization;
  }

  if (secretKey) {
    headers["X-rbac-SECRET-KEY"] = secretKey;
  }

  return headers;
}
