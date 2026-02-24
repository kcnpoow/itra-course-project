import type { SigninDto } from "../model";
import type { User } from "@/entities/user";
import { api } from "@/shared/api/base";

class AuthApi {
  private readonly BASE_URL = "/auth";

  public auth = async (): Promise<User> => {
    const url = `${this.BASE_URL}`;

    const response = await api.get<User>(url);

    return response.data;
  };

  public signin = async (data: SigninDto): Promise<User> => {
    const url = `${this.BASE_URL}/signin`;

    const response = await api.post<User>(url, data);

    return response.data;
  };

  public logout = async (): Promise<void> => {
    const url = `${this.BASE_URL}/logout`;

    await api.post(url);
  };
}

export const authApi = new AuthApi();
