export type Booking = {
  id: number;
  userId: number;
  serviceDate: Date;
  status: string;
  notes: string | null;
};
