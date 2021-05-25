import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getEvent } from "../../store/events";
import EventRow from "../EventRow";
import "./eventPage.css";

export default function EventPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector((state) => state.events.current);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  if (!event) return null;
  console.log(event.Tickets[0].price, " tickets");
  return (
    <div className='container'>
      <h1>{`Price $${event.Tickets[0].price}`}</h1>
        <table className="tables">
          <thead className='table-elements'>
            <tr>
              <th className='table-elements'>Name</th>
              <th className='table-elements'>Description</th>
              <th className='table-elements'>Date</th>
              <th className='table-elements'>Genre</th>
              <th className='table-elements'>Venue</th>
              <th className='table-elements'>City</th>
              <th className='table-elements'>Capacity</th>
            </tr>
          </thead>
          <tbody className='table-elements'>
            <EventRow key={event.id} event={event} />
            <div className='table-elements button-container'>
                <Link to="/purchase" className='table-elements'>
                  <button className='buttons'>Buy Tickets</button>
                </Link>
                <Link to="/bookmarks" className='table-elements'>
                  <button className='buttons'>Thinking about it? Save it!</button>
                </Link>
            </div>
          </tbody>
        </table>
    </div>
  );
}
