import { get, put } from "@/api/Request";

const API_ENDPOINT = process.env.API_ENDPOINT;

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormPatient {
  firstName: String;
  lastName: String;
  gender: GenderEnum;
  birthdate: String;
  registeNumber: String;
}

export async function findOne(id: number): Promise<IFormPatient> {
  const response = await get<IFormPatient>(`${API_ENDPOINT}/patient/${id}`);
  return response.data;
}

export async function findAll(): Promise<IFormPatient[]> {
  const response = await get<IFormPatient[]>(`${API_ENDPOINT}/patient`);
  return response.data;
}

export async function update(
  id: number,
  user: IFormPatient
): Promise<IFormPatient> {
  const response = await put<IFormPatient>(
    `${API_ENDPOINT}/patient/${id}`,
    user
  );
  return response.data;
}
