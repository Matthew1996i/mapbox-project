import axios from "axios";

function setupAPIClient() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const session = sessionStorage.getItem("sessions");

  if (session) {
    const { token } = JSON.parse(sessionStorage.getItem("sessions") || "");

    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  return api;
}

export const api = setupAPIClient();
