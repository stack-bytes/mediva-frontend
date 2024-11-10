export interface IGroup {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  members: string[];
  rating: string;
  location: string;
  geolocationX: number;
  geolocationY: number;
}
