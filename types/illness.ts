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
