export interface MarkerData {
  id: number;
  title: string;
  time?: number;
  price?: string;
  rating: number;
  latitude: number;
  longitude: number;
  car_seats: number;
  last_name: string;
  first_name: string;
  car_image_url: string;
  profile_image_url: string;
}

export interface MapProps {
  onMapReady?: () => void;
  destinationLatitude?: number;
  destinationLongitude?: number;
  selectedDriver?: number | null;
  onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
}

export interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}
