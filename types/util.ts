export interface IUtil {
  id: string;

  locationPhoto: string;
  locationName: string;

  coordinates: {
    first: number;
    second: number;
  };
  type: "medkit" | "defibrillator" | "oxygen";
}
