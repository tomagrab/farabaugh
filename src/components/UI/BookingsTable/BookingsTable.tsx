"use client";

import { Booking } from "@/Types/Booking/Booking";
import formatDate from "@/Utils/FormatDate/FormatDate";
import { getBooking } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookingsTable() {
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
              <th>Service Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
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
                <td>{formatDate(booking.serviceDate)}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() =>
                      (
                        document.getElementById(
                          `modal_${index}`
                        ) as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    details
                  </button>
                  <dialog id={`modal_${index}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Name: {user?.fullName}
                        <br />
                        Email: {user?.emailAddresses[0].emailAddress}
                        <br />
                        Phone: {user?.phoneNumbers?.[0]?.phoneNumber}
                        <br />
                        Service Date: {formatDate(booking.serviceDate)}
                        <br />
                        Notes: {booking.notes}
                        <br />
                        Status: {booking.status}
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </th>
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
