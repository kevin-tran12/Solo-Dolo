import { useLocation } from "react-router-dom";
import {NavLink} from 'react-router-dom'
const EventRow = ( {event} ) => {
  const queryString = new URLSearchParams(useLocation().search).get("q") ?? "";
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

  // let tickets
  // if(event.Tickets){
  //   tickets = <td>${event.Tickets[0].price}</td>;
  // } else{
  //   tickets = <td></td>
  // }
  return (
      <tr className='table-elements'>
      <td className='table-elements'><NavLink to={`/event/${event.id}`} className='table-elements'>{event.name}</NavLink></td>
      <td className='table-elements'>{event.description}</td>
      <td className='table-elements'>{event.date}</td>
      <td className='table-elements'>{event.Category.genre}</td>
      <td className='table-elements'>{event.Venue.name}</td>
      <td className='table-elements'>{event.Venue.city}</td>
      <td className='table-elements'>{event.Venue.capacity}</td>
      </tr>
  )
}

export default EventRow;
