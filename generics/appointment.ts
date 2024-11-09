import { IAppointment } from "@/types/appointment";

const GenericAppointments: IAppointment[] = [
  {
    id: "1",
    title: "General Checkup",
    pacientId: "1",
    doctorId: "6",
    dateTime: new Date("2024-11-09T09:00:00Z"),
    location: "City Hospital, Room 101",
    geolocation: {
      first: 40.712776,
      second: -74.005974,
    },
  },
  {
    id: "2",
    title: "Cardiology Consultation",
    pacientId: "2",
    doctorId: "6",
    dateTime: new Date("2023-11-02T10:30:00Z"),
    location: "City Hospital, Room 102",
    geolocation: {
      first: 40.712776,
      second: -74.005974,
    },
  },
  {
    id: "3",
    title: "Neurology Follow-up",
    pacientId: "3",
    doctorId: "7",
    dateTime: new Date("2023-11-03T11:00:00Z"),
    location: "Neuro Clinic, Room 201",
    geolocation: {
      first: 40.73061,
      second: -73.935242,
    },
  },
  {
    id: "4",
    title: "Pediatric Checkup",
    pacientId: "4",
    doctorId: "8",
    dateTime: new Date("2023-11-04T09:30:00Z"),
    location: "Children's Hospital, Room 301",
    geolocation: {
      first: 40.73061,
      second: -73.935242,
    },
  },
  {
    id: "5",
    title: "Orthopedic Consultation",
    pacientId: "5",
    doctorId: "9",
    dateTime: new Date("2023-11-05T14:00:00Z"),
    location: "Ortho Center, Room 401",
    geolocation: {
      first: 40.758896,
      second: -73.98513,
    },
  },
  {
    id: "6",
    title: "Dermatology Checkup",
    pacientId: "6",
    doctorId: "10",
    dateTime: new Date("2023-11-06T15:30:00Z"),
    location: "Skin Care Clinic, Room 501",
    geolocation: {
      first: 40.758896,
      second: -73.98513,
    },
  },
  {
    id: "7",
    title: "General Checkup",
    pacientId: "7",
    doctorId: "6",
    dateTime: new Date("2023-11-07T09:00:00Z"),
    location: "City Hospital, Room 101",
    geolocation: {
      first: 40.712776,
      second: -74.005974,
    },
  },
  {
    id: "8",
    title: "Cardiology Consultation",
    pacientId: "8",
    doctorId: "6",
    dateTime: new Date("2023-11-08T10:30:00Z"),
    location: "City Hospital, Room 102",
    geolocation: {
      first: 40.712776,
      second: -74.005974,
    },
  },
  {
    id: "9",
    title: "Neurology Follow-up",
    pacientId: "9",
    doctorId: "7",
    dateTime: new Date("2023-11-09T11:00:00Z"),
    location: "Neuro Clinic, Room 201",
    geolocation: {
      first: 40.73061,
      second: -73.935242,
    },
  },
  {
    id: "10",
    title: "Pediatric Checkup",
    pacientId: "10",
    doctorId: "8",
    dateTime: new Date("2023-11-10T09:30:00Z"),
    location: "Children's Hospital, Room 301",
    geolocation: {
      first: 40.73061,
      second: -73.935242,
    },
  },
];

export { GenericAppointments };
