import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, NavLink} from 'react-router-dom';
import {getEvents} from '../../store/events';


export default function Event(){
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state => {
        return state.event.map(pokemonId => state.event[eventId]);
      });
    useEffect(() =>{
        dispatch(getEvents())
    },[dispatch])
    {event.map((event) => {
        return (
          <NavLink key={event.name} to={`/event/${event.id}`}>
            <div>
              <div>
                <div className="primary-text">{event.name}</div>
              </div>
            </div>
          </NavLink>
        );
      })}
}