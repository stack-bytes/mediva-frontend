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

export interface ISymptomReport {
  id: string;

  symptoms: string;
  description: string;
  severity: number;
  emergency: boolean;

  date: Date;

  pacientId: IUser["id"];
  doctorId: IUser["id"][];
}
