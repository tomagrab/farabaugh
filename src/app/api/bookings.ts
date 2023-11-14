import { db } from "@/DB/db"; // Adjust the path as needed
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  message: string;
};

type Booking = {
  // Define the type structure for your booking, e.g.,
  id: number;
  userId: number;
  serviceDate: Date;
  status: string;
  notes: string | null;
  // Add other fields as needed
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Booking[] | ErrorResponse>
) {
  if (req.method === "GET") {
    const emailAddress = req.query.emailAddress as string; // Casting as string
    console.log("emailAddress", emailAddress);

    try {
      const bookings = await db.booking.findMany({
        where: { user: { email: emailAddress } },
      });
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
