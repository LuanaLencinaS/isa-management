import { IFormUserPatient } from "@/utils/IFormUserPatient";

export class UserPatientTransform {
  // para tela
  static fromResponse(data: any): IFormUserPatient {
    const userPatient: IFormUserPatient = {
      userId: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      gender: data.patient.gender,
      birthdate: data.patient.birthdate,
      registerNumber: data.patient.register_number,
      statusActive: data.status_active,
      patientId: data.patient.id,
    };

    return userPatient;
  }

  // para banco
  static toRequest(data: IFormUserPatient): any {
    const userPatient: any = {
      name: data.name,
      email: data.email,
      password: data.password,
      gender: data.gender,
      birthdate: data.birthdate,
      register_number: data.registerNumber,
    };

    return userPatient;
  }
}
