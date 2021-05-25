import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams, NavLink } from "react-router-dom";
import { getEvents } from "../../store/events";
import EventRow from '../EventRow';

export default function Event() {
  const dispatch = useDispatch();
  
  const events = useSelector((state) => Object.values(state.events));
  
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => <EventRow key={event.id} event={event} />)}
        </tbody>
      </table>
    </div>
  );
};
