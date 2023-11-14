// actions.js
"use server";

import { db } from "@/DB/db";

type BookingFormData = {
  date: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export async function createBooking(formData: BookingFormData) {
  const { date, email, firstName, lastName, phoneNumber } = formData;

  // Find or create the user based on the email and phone number
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

  // Create a new booking
  return await db.booking.create({
    data: {
      userId: user.id,
      serviceDate: new Date(date),
      status: "Pending", // or any default status you prefer
      // Add notes if necessary
    },
  });
}
