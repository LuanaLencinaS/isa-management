import { GenderEnum } from "@/utils/GenderEnum";

export interface IFormUserPatient {
  userId: string;
  name: string;
  email: string;
  password: string;
  gender: GenderEnum | string;
  birthdate: string;
  registerNumber: string;
  statusActive: boolean;
  patientId: string;
}
