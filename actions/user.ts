import { GenericUsers } from "@/generics/user";
import { IUser } from "@/types/user";

export const doctorById = (userId: IUser["id"]): Promise<IUser | null> => {
  const foundDoctor = GenericUsers.find(
    (user) => user.id === userId && user.medic !== null
  );

  if (!foundDoctor) {
    return Promise.resolve(null);
  }

  return Promise.resolve(foundDoctor);
};

export const getUserById = (userId: IUser["id"]): Promise<IUser | null> => {
  const foundUser = GenericUsers.find((user) => user.id === userId);

  if (!foundUser) {
    return Promise.resolve(null);
  }

  return Promise.resolve(foundUser);
};
