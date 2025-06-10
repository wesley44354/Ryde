export type PaymentStatusTypes = "paid" | "wait";

export interface Ride {
  origin_address: string;
  destination_address: string;
  ride_time: number;
  fare_price: number;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  payment_status: PaymentStatusTypes;
  driver_id: number;
  user_email: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}
