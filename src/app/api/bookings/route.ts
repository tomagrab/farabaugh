import { db } from "@/DB/db";
import type { NextRequest } from "next/server";

type BookingResponse = {
  id: number;
  serviceDate: Date;
  status: string;
  notes: string | null;
};

export async function GET(request: NextRequest) {
  const emailAddress = request.nextUrl.searchParams.get("emailAddress");
  console.log(emailAddress);

  try {
    const user = await db.user.findUnique({
      where: { email: emailAddress! },
      include: {
        bookings: true,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(user.bookings), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching bookings" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
