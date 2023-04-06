import { GenderEnum } from "@/utils/GenderEnum";

export interface IFormUserPatient {
  userId: String;
  name: String;
  email: String;
  password: String;
  gender: GenderEnum;
  birthdate: String;
  registeNumber: String;
  statusActive: Boolean;
  patientId: String;
}
