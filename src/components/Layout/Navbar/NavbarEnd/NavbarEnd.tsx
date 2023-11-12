"use client";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function NavbarEnd() {
  const { user } = useUser();

  // Using ternary operator to simplify the logic
  const firstName = user ? user.firstName : "Guest";
  const lastName = user ? user.lastName : "";
  const fullName = user ? `${firstName} ${lastName}` : "Guest";

  if (fullName !== "Guest" && user) {
    return (
      <div className="navbar-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }

  return (
    <div className="navbar-end">
      <SignInButton />
    </div>
  );
}
