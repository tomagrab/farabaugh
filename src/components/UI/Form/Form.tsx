"use client";

import { useUser } from "@clerk/nextjs";

export default function Form() {
  const { user } = useUser();

  const email = user ? user.emailAddresses[0].emailAddress : "";
  const firstName = user ? user.firstName : "";
  const lastName = user ? user.lastName : "";
  const phoneNumber = user ? user.phoneNumbers[0].phoneNumber : "";

  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          value={email}
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
        />
      </div>

      <div className="form-control mt-6">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
}
