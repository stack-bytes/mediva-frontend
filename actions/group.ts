import { ENDPOINT } from "@/constants/config";

export const getGroups = async () => {
  const response = await fetch(`${ENDPOINT}/group/`);
  const data = await response.json();
  return data;
};
