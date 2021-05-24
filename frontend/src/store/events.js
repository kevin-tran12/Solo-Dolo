import {csrfFetch} from './csrf'
const LOAD_ALL = 'events/LOAD';


const loadEvents = events => ({
  type: LOAD_ALL,
  events,
});

export const getEvents = () => async dispatch => {
  const response = await csrfFetch(`/api/events`);

  if (response.ok) {
    const events = await response.json();
    dispatch(loadEvents(events));
  }
};

const initialState = {
  events:{}
};



const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL: {
      const all = {};
      action.events.events.forEach(event => {
        all[event.id] = event;
      });
      return {
        ...state,
        events:{...all},
      };
    }
    default:
      return state;
  }
}

export default eventsReducer;
