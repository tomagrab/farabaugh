import { Booking } from "@/Types/Booking/Booking";
import formatDate from "@/Utils/FormatDate/FormatDate";
import { UserResource } from "@clerk/types";

type ModalProps = {
  index: number;
  booking: Booking;
  user: UserResource;
};

export default function Modal({ index, booking, user }: ModalProps) {
  return (
    <dialog id={`modal_${index}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Booking Details</h3>
        <div className="py-4 space-y-2">
          <p>
            <strong>Name:</strong> {user?.fullName}
          </p>
          <p>
            <strong>Email:</strong> {user?.emailAddresses[0].emailAddress}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phoneNumbers[0].phoneNumber || "N/A"}
          </p>
          <p>
            <strong>Service Date:</strong> {formatDate(booking.serviceDate)}
          </p>
          <p>
            <strong>Notes:</strong> {booking.notes || "None"}
          </p>
          <p>
            <strong>Status:</strong> {booking.status}
          </p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
