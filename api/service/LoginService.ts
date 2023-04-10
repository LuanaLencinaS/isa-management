import { post } from "@/api/Request";
import { AxiosResponse } from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function login(email: string, password: string): Promise<any> {
  try {
    const response = await post<AxiosResponse<any>>(`${API_ENDPOINT}/login/`, {
      email,
      password,
    });
    return { data: response.data.data, status: 1 };
  } catch (error) {
    return { data: {}, status: 0 };
  }
}
