"use client";

import { createBooking } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import { FormEvent, useEffect, useState } from "react";

export default function Form() {
  const { user } = useUser();

  // Initialize state with default values
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  // Update state when user data is available
  useEffect(() => {
    if (user) {
      if (user.firstName) {
        setFirstName(user.firstName);
      }

      if (user.lastName) {
        setLastName(user.lastName);
      }

      setEmail(user.emailAddresses[0].emailAddress);
      setPhoneNumber(user.phoneNumbers[0].phoneNumber);
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      date,
      email,
      firstName,
      lastName,
      phoneNumber,
      notes,
    };

    // Call the server action to create a booking
    try {
      await createBooking(formData);
      // Handle success - e.g., show a success message, clear form, etc.
    } catch (error) {
      // Handle errors - e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Date input  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          placeholder="Date"
          className="input input-bordered"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered"
          value={firstName!}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered"
          value={lastName!}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered"
          value={phoneNumber!}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Notes</span>
        </label>
        <textarea
          placeholder="Enter any notes here"
          className="textarea textarea-bordered"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="form-control mt-6">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
}
