import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getEvents } from "../../store/events";
import EventRow from "../EventRow";

export default function Event() {
  const dispatch = useDispatch();

  const events = useSelector((state) => Object.values(state.events));

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if(events.length ===0) return null
  if(!events[0].Category.genre) return null
  console.log(events[0].Category.genre)
  let bool = events[0].Category.genre
  return (
    <div className="events">
    {bool &&
      <div>
      <h2 className="heading">Events</h2>
      <table className="tables">
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
      {events.map((event) => (<tr className='table-elements'>
      <td className='table-elements'><NavLink to={`/event/${event.id}`} className='table-elements'>{event.name}</NavLink></td>
      <td className='table-elements'>{event.description}</td>
      <td className='table-elements'>{event.date}</td>
      <td className='table-elements'>{event.Category.genre}</td>
      <td className='table-elements'>{event.Venue.name}</td>
      <td className='table-elements'>{event.Venue.city}</td>
      <td className='table-elements'>{event.Venue.capacity}</td>
      </tr>))}
      </tbody>
      </table>
      </div>
    }
      </div>
  );
}
