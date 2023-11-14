import { db } from "@/DB/db"; // Adjust the path as needed
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  message: string;
};

type BookingResponse = {
  // Adjust this type according to the data you want to send back
  id: number;
  serviceDate: Date;
  status: string;
  notes: string | null;
  // Include any other relevant fields
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookingResponse[] | ErrorResponse>
) {
  if (req.method === "GET") {
    const emailAddress = req.query.emailAddress as string;

    try {
      const user = await db.user.findUnique({
        where: { email: emailAddress },
        include: {
          bookings: true, // Include the user's bookings
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user.bookings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
