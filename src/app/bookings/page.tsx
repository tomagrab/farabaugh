"use client";

import { Booking } from "@/Types/Booking/Booking";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Bookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    async function fetchBookings() {
      if (user) {
        const emailAddress = user.emailAddresses[0].emailAddress;

        try {
          const response = await fetch(
            `/api/bookings/${encodeURIComponent(emailAddress)}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch bookings");
          }
          const data = await response.json();
          setBookings(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    }

    fetchBookings();
  }, [user]);

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {/* Ensure you render the correct fields here */}
            <p>Date: {new Date(booking.serviceDate).toLocaleDateString()}</p>
            {/* Render other booking details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
