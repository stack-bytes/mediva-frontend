import { IUser } from "@/types/user";

export interface IIllness {
  id: string;

  name: string;
  description: string;
  date: Date;

  pacientId: IUser["id"];
  doctorId: IUser["id"];

  prescriptionId: string;
  symptomsId: string[];

  tags: string[];
}

export interface ISymptom {
  name: string;
  severity: number;
}
export interface ISymptomReport {
  id: string;
  description: string;

  symptoms: ISymptom[];
  emergency: boolean;

  date: Date;

  pacientId: IUser["id"];
  doctorId: IUser["id"][];
}
