// actions.js
"use server";

import { db } from "@/DB/db";
import { redirect } from "next/navigation";

type BookingFormData = {
  date: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  notes?: string;
};

export async function createBooking(formData: BookingFormData) {
  const { date, email, firstName, lastName, phoneNumber, notes } = formData;

  let user = await db.user.findUnique({ where: { email } });
  if (!user) {
    user = await db.user.create({
      data: {
        email,
        phone: phoneNumber,
        name: `${firstName} ${lastName}`,
      },
    });
  }

  await db.booking.create({
    data: {
      userId: user.id,
      serviceDate: new Date(date),
      status: "Pending",
      notes,
    },
  });

  redirect(`/bookings`);
}

export async function getBooking(email: string) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      bookings: true,
    },
  });

  if (!user) {
    return null;
  }

  return user.bookings;
}
