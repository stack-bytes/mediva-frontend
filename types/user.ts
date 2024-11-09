export type MEDIC_GRADE = "specialist" | "primary";

export interface IUser {
  id: string;

  username: string;
  email: string;
  password: string;
  phone: string;

  fullName: string;
  avatar: string;

  medic: null | IMedic;

  gpg: string;
  doctorsId: string[];

  createdAt: Date;
  updatedAt: Date;
}

export interface IMedic {
  id: string;

  medicalId: string; //License number
  activeSince: Date;

  specialty: string;
  grade: MEDIC_GRADE;
  workplace: string;
  ratings: number;

  bio: string;

  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };

  patientsId: IUser["id"][];
}
