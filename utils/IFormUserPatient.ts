import { GenderEnum } from "@/utils/GenderEnum";

export interface IFormUserPatient {
  userId: string;
  name: string;
  email: string;
  password: string;
  gender: GenderEnum | string;
  birthdate: string;
  registeNumber: string;
  statusActive: Boolean;
  patientId: string;
}
