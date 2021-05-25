import {csrfFetch} from './csrf'
const LOAD_ALL = 'events/LOAD';


const loadEvents = events => ({
  type: LOAD_ALL,
  events,
});

export const getEvents = () => async dispatch => {
  const response = await csrfFetch(`/api/events`);
  if (!response.ok) return
    const events = await response.json();
    console.log(events)
    dispatch(loadEvents(events))
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
    default:
      return state;
  }
}

export default eventsReducer;
