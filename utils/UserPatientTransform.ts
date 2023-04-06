import { IFormUserPatient } from "@/utils/IFormUserPatient";

export class UserPatientTransform {
  static fromResponse(data: any): IFormUserPatient {
    const userPatient: IFormUserPatient = {
      userId: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      gender: data.patient.gender,
      birthdate: data.patient.birthdate,
      registeNumber: data.patient.register_number,
      statusActive: data.status_active,
      patientId: data.patient.id,
    };

    return userPatient;
  }
}
