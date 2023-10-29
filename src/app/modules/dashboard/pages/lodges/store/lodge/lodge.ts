export enum UserRole {
  ADMIN = 'admin',
  RECEPTIONIST = 'receptionist',
}
export interface Lodge {
  id: string;
  city: string;
  address: string;
  description: string;
  images:string
  rooms?: Array<Room>;
  employee?: Array<Employee>;
  bookings?: Array<Booking>;
}
export interface CreateLodge{
  id: string;
  city: string;
  address: string;
  description: string;
  images:File
}

export interface Booking {
  id: string;
  start_date: string;
  end_date: string;
  total_payment: string;
  guest: Array<Guest>;
  lodge: Lodge;
}

export interface Room {
  id: string;
  room_number: number;
  room_type: RoomType;
  lodge: Lodge;
}

export interface RoomType {
  id: string;
  capacity: number;
  type: string;
  address: string;
  rooms: Array<Room>;
  room_price: string;
  description: string;
  images: string;
}
export interface Employee {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  password: string;
  role: UserRole;
  mobile_number: string;
  address: string;
  city: string;
  nationality: string;
  lodge: Lodge;
}

export interface Guest {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  password: string;
  mobile_number: string;
  address: string;
  city: string;
  nationality: string;
  bookings: Array<Booking>;
}
