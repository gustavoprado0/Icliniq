import { http } from "../../shared/http";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const AuthService = {
  register: async (data: RegisterPayload) => {
    const response = await http.post("/api/auth/register", data);
    return response.data;
  },

  login: async (data: LoginPayload) => {
    const response = await http.post("/api/auth/login", data);
    return response.data;
  },
};
