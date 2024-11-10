import { ENDPOINT } from "@/constants/config";
import { ISymptom } from "@/types/illness";

export const createSymptoms = async (symptoms: Omit<ISymptom, "id">[]) => {
  console.log("POST_SYMPTOMS | Posting symptoms", symptoms);

  const response = await fetch(ENDPOINT + "/symptom/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(symptoms),
  });

  if (!response.ok || !response.body) {
    return [];
  }
  console.log("POST_SYMPTOMS | Symptoms created", response.json());

  return response.json();
};

export const getUserSymptoms = async (
  userId: string
): Promise<ISymptom[] | []> => {
  const response = await fetch(ENDPOINT + `/symptom/user?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("JSON_FORMAT: Symptoms fetched", data);

  return data;
};

export const addSymptomToExistingIllness = async (
  symptomId: string,
  illnessId: string
): Promise<ISymptom[] | []> => {
  const response = await fetch(ENDPOINT + `/symptom/user?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("JSON_FORMAT: Symptoms fetched", data);

  return data;
};
