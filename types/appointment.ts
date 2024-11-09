import { Double } from "react-native/Libraries/Types/CodegenTypes";

export interface IAppointment {
  id: string;

  title: string;
  pacientId: string;
  doctorId: string;

  dateTime: Date;
  location: string;
  geolocation: {
    first: Double;
    second: Double;
  };
}

export interface ICreateAppointment {
  title: string;
  pacientId: string;
  doctorId: string;

  dateTime: Date;
  location: string;
  geolocationX: Double;
  geolocationY: Double;
}
