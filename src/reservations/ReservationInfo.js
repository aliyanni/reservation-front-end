import React from "react";
import { useHistory } from "react-router";
import { updateResStatus } from "../utils/api";

function ReservationInfo({ reservation, setError }) {
  const history = useHistory();
  const abortController = new AbortController();
  const handleCancelReservation = async (event) => {
    event.preventDefault();
    if (
      window.confirm(
        "Do you want to cancel this reservation? This cannot be undone."
      )
    ) {
      try {
        await updateResStatus(
          { status: "cancelled" },
          reservation.reservation_id,
          abortController.signal
        );
        history.push("/dashboard");
      } catch (err) {
        setError(err);
      }
    }
  };

  return (
    <tr>
      <th scope="row"> {reservation.reservation_id} </th>
      <td> {reservation.first_name} </td>
      <td> {reservation.last_name} </td>
      <td> {reservation.people} </td>
      <td> {reservation.mobile_number} </td>
      <td> {reservation.reservation_date} </td>
      <td> {reservation.reservation_time} </td>
      <td data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>
      <td>
        {reservation.status === "booked" && (
          <>
            <a href={`/reservations/${reservation.reservation_id}/seat`}>
              <button className="btn btn-primary m-1"> Seat</button>
            </a>
            <a href={`/reservations/${reservation.reservation_id}/edit`}>
              <button className="btn btn-primary m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
            </a>
            <button
              data-reservation-id-cancel={`${reservation.reservation_id}`}
              className="btn btn-danger m-1"
              onClick={handleCancelReservation}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ReservationInfo;
