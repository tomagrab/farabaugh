import { Booking } from "@/Types/Booking/Booking";
import formatDate from "@/Utils/FormatDate/FormatDate";
import BookingsTable from "@/components/UI/BookingsTable/BookingsTable";
import { useUser } from "@clerk/nextjs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bookings | Farabaugh's Precision Pressure Washing",
  description: "Generated by create next app",
};

export default function Bookings() {
  return (
    <div>
      <BookingsTable />
    </div>
  );
}
