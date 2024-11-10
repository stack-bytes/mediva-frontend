import { IUtil } from "@/types/util";

const getRandomCoordinate = (base: number, offset: number) => {
  return base + (Math.random() - 0.5) * offset;
};

const GenericUtils: IUtil[] = [
  {
    id: "1",
    locationPhoto: "https://example.com/photos/medkit1.jpg",
    locationName: "City Hospital",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "medkit",
  },
  {
    id: "2",
    locationPhoto: "https://example.com/photos/defibrillator1.jpg",
    locationName: "Community Center",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "defibrillator",
  },
  {
    id: "3",
    locationPhoto: "https://example.com/photos/oxygen1.jpg",
    locationName: "Health Clinic",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "oxygen",
  },
  {
    id: "4",
    locationPhoto: "https://example.com/photos/medkit2.jpg",
    locationName: "Fitness Center",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "medkit",
  },
  {
    id: "5",
    locationPhoto: "https://example.com/photos/defibrillator2.jpg",
    locationName: "Downtown Pharmacy",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "defibrillator",
  },
  {
    id: "6",
    locationPhoto: "https://example.com/photos/oxygen2.jpg",
    locationName: "Sports Complex",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "oxygen",
  },
  {
    id: "7",
    locationPhoto: "https://example.com/photos/medkit3.jpg",
    locationName: "Medical Supply Store",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "medkit",
  },
  {
    id: "8",
    locationPhoto: "https://example.com/photos/defibrillator3.jpg",
    locationName: "Yoga Studio",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "defibrillator",
  },
  {
    id: "9",
    locationPhoto: "https://example.com/photos/oxygen3.jpg",
    locationName: "Emergency Room",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "oxygen",
  },
  {
    id: "10",
    locationPhoto: "https://example.com/photos/medkit4.jpg",
    locationName: "Public Library",
    coordinates: {
      first: getRandomCoordinate(45.7489, 0.02),
      second: getRandomCoordinate(21.2087, 0.02),
    },
    type: "medkit",
  },
];

export { GenericUtils };
