import { IUser } from "@/types/user";

const GenericUsers: IUser[] = [
  {
    id: "1",
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123",
    phone: "123-456-7890",
    fullName: "John Doe",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    gpg: "gpg_key_1",
    doctorsId: [],
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: "password123",
    phone: "123-456-7891",
    fullName: "Jane Smith",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    gpg: "gpg_key_2",
    doctorsId: [],
    createdAt: "2023-01-02T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
  },
  {
    id: "3",
    username: "alice_johnson",
    email: "alice.johnson@example.com",
    password: "password123",
    phone: "123-456-7892",
    fullName: "Alice Johnson",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    gpg: "gpg_key_3",
    doctorsId: [],
    createdAt: "2023-01-03T00:00:00Z",
    updatedAt: "2023-01-03T00:00:00Z",
  },
  {
    id: "4",
    username: "bob_brown",
    email: "bob.brown@example.com",
    password: "password123",
    phone: "123-456-7893",
    fullName: "Bob Brown",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    gpg: "gpg_key_4",
    doctorsId: [],
    createdAt: "2023-01-04T00:00:00Z",
    updatedAt: "2023-01-04T00:00:00Z",
  },
  {
    id: "5",
    username: "charlie_davis",
    email: "charlie.davis@example.com",
    password: "password123",
    phone: "123-456-7894",
    fullName: "Charlie Davis",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    gpg: "gpg_key_5",
    doctorsId: [],
    createdAt: "2023-01-05T00:00:00Z",
    updatedAt: "2023-01-05T00:00:00Z",
  },
  {
    id: "6",
    username: "dr_emily_white",
    email: "emily.white@example.com",
    password: "password123",
    phone: "123-456-7895",
    fullName: "Emily White",
    avatar: "https://thispersondoesnotexist.com",
    medic: {
      id: "6",
      medicalId: "MD123456",
      activeSince: "2010-01-01",
      specialty: "Cardiology",
      grade: "specialist",
      workplace: "City Hospital",
      ratings: 4.8,
      bio: "Experienced cardiologist with over 10 years of practice.",
      contactInfo: {
        phone: "123-456-7895",
        email: "emily.white@example.com",
        address: "123 Heart St, Cityville",
      },
      patientsId: ["1", "2"],
    },
    gpg: "gpg_key_6",
    doctorsId: [],
    createdAt: "2023-01-06T00:00:00Z",
    updatedAt: "2023-01-06T00:00:00Z",
  },
  {
    id: "7",
    username: "dr_frank_green",
    email: "frank.green@example.com",
    password: "password123",
    phone: "123-456-7896",
    fullName: "Frank Green",
    avatar: "https://thispersondoesnotexist.com",
    medic: {
      id: "7",
      medicalId: "MD654321",
      activeSince: "2012-01-01",
      specialty: "Neurology",
      grade: "specialist",
      workplace: "Neuro Clinic",
      ratings: 4.7,
      bio: "Specialist in neurology with a focus on patient care.",
      contactInfo: {
        phone: "123-456-7896",
        email: "frank.green@example.com",
        address: "456 Brain Ave, Neurotown",
      },
      patientsId: ["3", "4"],
    },
    gpg: "gpg_key_7",
    doctorsId: [],
    createdAt: "2023-01-07T00:00:00Z",
    updatedAt: "2023-01-07T00:00:00Z",
  },
  {
    id: "8",
    username: "dr_grace_lee",
    email: "grace.lee@example.com",
    password: "password123",
    phone: "123-456-7897",
    fullName: "Grace Lee",
    avatar: "https://thispersondoesnotexist.com",
    medic: {
      id: "8",
      medicalId: "MD789012",
      activeSince: "2015-01-01",
      specialty: "Pediatrics",
      grade: "primary",
      workplace: "Children's Hospital",
      ratings: 4.9,
      bio: "Dedicated pediatrician with a passion for child health.",
      contactInfo: {
        phone: "123-456-7897",
        email: "grace.lee@example.com",
        address: "789 Child St, Kidstown",
      },
      patientsId: ["5"],
    },
    gpg: "gpg_key_8",
    doctorsId: [],
    createdAt: "2023-01-08T00:00:00Z",
    updatedAt: "2023-01-08T00:00:00Z",
  },
  {
    id: "9",
    username: "dr_henry_clark",
    email: "henry.clark@example.com",
    password: "password123",
    phone: "123-456-7898",
    fullName: "Henry Clark",
    avatar: "https://thispersondoesnotexist.com",
    medic: {
      id: "9",
      medicalId: "MD345678",
      activeSince: "2008-01-01",
      specialty: "Orthopedics",
      grade: "specialist",
      workplace: "Ortho Center",
      ratings: 4.6,
      bio: "Orthopedic surgeon with extensive experience in joint replacement.",
      contactInfo: {
        phone: "123-456-7898",
        email: "henry.clark@example.com",
        address: "123 Bone St, Orthoville",
      },
      patientsId: ["6", "7"],
    },
    gpg: "gpg_key_9",
    doctorsId: [],
    createdAt: "2023-01-09T00:00:00Z",
    updatedAt: "2023-01-09T00:00:00Z",
  },
  {
    id: "10",
    username: "dr_ivy_martin",
    email: "ivy.martin@example.com",
    password: "password123",
    phone: "123-456-7899",
    fullName: "Ivy Martin",
    avatar: "https://thispersondoesnotexist.com",
    medic: {
      id: "10",
      medicalId: "MD901234",
      activeSince: "2011-01-01",
      specialty: "Dermatology",
      grade: "primary",
      workplace: "Skin Care Clinic",
      ratings: 4.5,
      bio: "Dermatologist with a focus on skin health and beauty.",
      contactInfo: {
        phone: "123-456-7899",
        email: "ivy.martin@example.com",
        address: "456 Skin St, Dermaville",
      },
      patientsId: ["8", "9", "10"],
    },
    gpg: "gpg_key_10",
    doctorsId: [],
    createdAt: "2023-01-10T00:00:00Z",
    updatedAt: "2023-01-10T00:00:00Z",
  },
];

export { GenericUsers };
