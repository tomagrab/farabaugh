"use client";

import { Booking } from "@/Types/Booking/Booking";
import formatDate from "@/Utils/FormatDate/FormatDate";
import { getBooking } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Bookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    async function fetchBookings() {
      if (user?.emailAddresses[0].emailAddress) {
        try {
          const fetchedBookings = await getBooking(
            user.emailAddresses[0].emailAddress
          );
          if (fetchedBookings) {
            setBookings(fetchedBookings);
          }
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    }

    fetchBookings();
  }, [user]); // Depend on user object to re-run the effect when user changes

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Service Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={user?.imageUrl!}
                          alt="avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.fullName}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.status}</td>
                <td>{booking.notes}</td>
                <td>{formatDate(booking.serviceDate)}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}
