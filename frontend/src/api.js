const BASE_URL = "/api";

async function request(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data;
}

export const api = {
  register: (payload) => request("/auth/register", { method: "POST", body: payload }),
  login: (payload) => request("/auth/login", { method: "POST", body: payload }),
  listFreelancers: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== "" && v != null)
    ).toString();
    return request(`/freelancers${qs ? `?${qs}` : ""}`);
  },
  getFreelancer: (id) => request(`/freelancers/${id}`),
  getMeta: () => request("/freelancers/meta"),
  getMyProfile: (token) => request("/freelancers/me", { token }),
  updateMyProfile: (token, payload) =>
    request("/freelancers/me", { method: "PUT", body: payload, token }),
};
