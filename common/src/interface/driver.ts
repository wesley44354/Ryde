import { MarkerData } from "./map";

export interface Driver {
  profile_image_url: string;
  car_image_url: string;
  first_name: string;
  last_name: string;
  car_seats: number;
  driver_id: number;
  rating: number;
}

export interface DriverStore {
  drivers: MarkerData[];
  selectedDriver: number | null;
  clearSelectedDriver: () => void;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: MarkerData[]) => void;
}

export interface DriverCardProps {
  item: MarkerData;
  selected: number;
  setSelected: () => void;
}
