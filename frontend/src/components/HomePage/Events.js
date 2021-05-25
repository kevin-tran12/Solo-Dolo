import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams, NavLink } from "react-router-dom";
import { getEvents } from "../../store/events";
import EventRow from '../EventRow';

export default function Event() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const events = useSelector((state) => Object.values(state.events));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User No.</th>
            <th>User's Name</th>
            <th>User's Email</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => <EventRow key={event.id} event={event} />)}
        </tbody>
      </table>
    </div>
  );
};
