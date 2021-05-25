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
    <div className='events'>
      <div>
        <h2 className='heading'>Events</h2>
        <table className='tables'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Venue</th>
              <th>City</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => <EventRow key={event.id} event={event} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
