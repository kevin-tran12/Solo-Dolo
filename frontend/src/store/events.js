import {csrfFetch} from './csrf'

const LOAD_ALL = 'events/ALL';
const LOAD_ONE = 'events/ONE'

const loadEvents = events => ({
  type: LOAD_ALL,
  events,
});

const loadEvent = event => ({
  type: LOAD_ONE,
  event,
});

export const getEvents = () => async dispatch => {
  const response = await csrfFetch(`/api/events`);
  if (!response.ok) return
    const events = await response.json();
    dispatch(loadEvents(events))
}

export const getEvent = id => async dispatch => {
  const response = await csrfFetch(`/api/events/${id}`);
  if (!response.ok) return
    const event = await response.json();
    dispatch(loadEvent(event))
}
const initialState = {};



const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL: {
      const newState = {...state}
      action.events.events.forEach(event => {
        newState[event.id] = event
      });
      return newState
    }
    case LOAD_ONE: {
      const newState = {...state}
      const event = action.event
      newState[event.id] = event
      return {...newState,current:event}
    }
    default:
      return state;
  }
}

export default eventsReducer;
