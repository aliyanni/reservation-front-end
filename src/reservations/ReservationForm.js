import React from "react";
import { useHistory } from "react-router-dom";

function ReservationForm({ form, handleChange, handleSubmit }) {
  let history = useHistory();

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row p-1">
        <div className="col">
          <label htmlFor="first_name" className="row p-3">
            First Name:
            <input
              id="first_name"
              type="text"
              name="first_name"
              onChange={(e) => handleChange(e, "first_name")}
              value={form.first_name}
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="last_name" className="row p-3">
            Last Name:
            <input
              id="last_name"
              type="text"
              name="last_name"
              onChange={(e) => handleChange(e, "last_name")}
              value={form.last_name}
            />
          </label>
        </div>
      </div>

      <div className="row p-1">
        <div className="col">
          <label htmlFor="mobile_number" className="row p-3">
            Mobile Number:
            <input
              id="mobile_number"
              type="tel"
              name="mobile_number"
              placeholder="555-555-5555"
              onChange={(e) => handleChange(e, "mobile_number")}
              value={form.mobile_number}
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="people" className="row p-3">
            People:
            <input
              id="people"
              type="number"
              name="people"
              onChange={(e) => handleChange(e, "people")}
              value={form.people}
            />
          </label>
        </div>
      </div>

      <div className="row p-1">
        <div className="col">
          <label htmlFor="reservation_date" className="row p-3">
            Reservation Date:
            <input
              id="reservation_date"
              type="date"
              name="reservation_date"
              placeholder="DD-MM-YYY"
              pattern="\d{2}-\d{2}-\d{4}"
              onChange={(e) => handleChange(e, "reservation_date")}
              value={form.reservation_date}
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="reservation_time" className="row p-3">
            Reservation Time:
            <input
              id="reservation_time"
              type="time"
              name="reservation_time"
              placeholder="HH:MM"
              pattern="[0-9]{2}:[0-9]{2}"
              onChange={(e) => handleChange(e, "reservation_time")}
              value={form.reservation_time}
            />
          </label>
        </div>
      </div>

      <div className="p-2">
        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={history.goBack}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;
