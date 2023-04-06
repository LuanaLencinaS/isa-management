import { get, put } from "@/api/Request";
import { AxiosResponse } from "axios";
import { IFormUserPatient } from "@/utils/IFormUserPatient";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function findOne(id: number): Promise<IFormUserPatient> {
  const response = await get<AxiosResponse<any>>(
    `${API_ENDPOINT}/patient/${id}`
  );
  return response.data.data as IFormUserPatient;
}

export async function findAll(): Promise<IFormUserPatient[]> {
  const response = await get<AxiosResponse<any>>(`${API_ENDPOINT}/patient`);
  return response.data.data as IFormUserPatient[];
}

export async function update(
  id: string,
  user: IFormUserPatient
): Promise<IFormUserPatient> {
  const response = await put<AxiosResponse<any>>(
    `${API_ENDPOINT}/patient/${id}`,
    user
  );
  return response.data.data as IFormUserPatient;
}

export async function deleteUser(id: string): Promise<any> {
  const response = await put<AxiosResponse<any>>(
    `${API_ENDPOINT}/patient/${id}/delete`,
    {}
  );
  return response.data.data as any;
}

export async function retoreUser(id: string): Promise<any> {
  const response = await put<AxiosResponse<any>>(
    `${API_ENDPOINT}/patient/${id}/restore`,
    {}
  );
  return response.data.data as any;
}
