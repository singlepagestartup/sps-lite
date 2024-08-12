export function util() {
  const authorization = localStorage.getItem("sps-rbac.subject.jwt");
  const secretKey = localStorage.getItem("sps-rbac.secret-key");

  const headers: HeadersInit = {};

  if (authorization) {
    headers.Authorization = "Bearer " + authorization;
  }

  if (secretKey) {
    headers["X-SPS-RBAC-SECRET-KEY"] = secretKey;
  }

  return headers;
}
