import { useLocation } from "react-router-dom";
import {NavLink} from 'react-router-dom'
const EventRow = ( {event} ) => {
  const queryString = new URLSearchParams(useLocation().search).get("q") ?? "";
    // console.log(queryString)
  if (
    !(
      event.name.includes(queryString) ||
      event.description.includes(queryString) ||
      String(event.id).includes(queryString) ||
      event.Category.includes(queryString)||
      event.Venue.includes(queryString)
    )
  ) {
    return null;
  }

  return (
    <tr>
      <td><NavLink to={`/event/${event.id}`}>{event.name}</NavLink></td>
      <td>{event.description}</td>
      <td>{event.Category.genre}</td>
      <td>{event.Venue.name}</td>
      <td>{event.Venue.city}</td>
      <td>{event.Venue.capacity}</td>
    </tr>
  );
};

export default EventRow;
