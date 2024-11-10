import { IUser } from "@/types/user";
import { create } from "zustand";

export interface ISessionStoreProps {
  user: IUser;
  mode: "medic" | "patient";
  setUser: (user: IUser) => void;
}

export const useSessionStore = create<ISessionStoreProps>((set) => ({
  user: {
    id: "7",
    username: "john_doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    age: 30,
    gender: "male",
    fullName: "John Doe",
    avatar: "https://thispersondoesnotexist.com",
    medic: null,
    doctorsId: ["1"],
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-01T00:00:00Z"),
  },
  mode: "patient",
  setUser: (user) => set({ user }),
}));
