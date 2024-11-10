import { ENDPOINT } from "@/constants/config";

export const getUtils = async () => {
  const response = await fetch(`${ENDPOINT}/map/util`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Expected JSON array response");
  }

  return data;
};
