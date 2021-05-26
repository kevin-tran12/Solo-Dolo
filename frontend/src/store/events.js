import {csrfFetch} from './csrf'

const LOAD_ALL = 'events/ALL';
const LOAD_ONE = 'events/ONE'

const LOAD_BOOKMARK = 'events/LOAD_BOOKMARK'
const ADD_BOOKMARK = 'events/ADD_BOOKMARK'
const DELETE_BOOKMARK = 'events/DELETE_BOOKMARK'

const loadEvents = events => ({
  type: LOAD_ALL,
  events,
});

const loadEvent = event => ({
  type: LOAD_ONE,
  event,
});

const loadBookmarks = bookmark => ({
  type: LOAD_BOOKMARK,
  bookmark,
});

const addBookmark = bookmark => ({
  type: ADD_BOOKMARK,
  bookmark,
});

const deleteBookmark = bookmark => ({
  type: DELETE_BOOKMARK,
  bookmark,
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

export const getBookmarks = id => async dispatch => {
  const response = await csrfFetch(`/api/events/bookmarks/${id}`);
  if (!response.ok) return
    const bookmark = await response.json();
    dispatch(loadBookmarks(bookmark));


}

export const deleteOneBookmark = payload => async dispatch => {
  console.log('deleting',payload)
  const {userId, eventId} = payload
  const response = await csrfFetch(`/api/events/${eventId}/bookmarks`,{
    method: 'DELETE',
    body: JSON.stringify({eventId, userId})
  });
  if (!response.ok) return
    const bookmark = await response.json();
    dispatch(deleteBookmark(bookmark));
}

export const addOneBookmark = payload => async dispatch => {
  const {userId, eventId} = payload
  const response = await csrfFetch(`/api/events/${eventId}/bookmarks`,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({eventId, userId})
  });
  if (!response.ok) return
    const bookmark = await response.json();
    dispatch(addBookmark(bookmark));
    return bookmark
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
    case LOAD_BOOKMARK: {
      const newState = {...state}
      action.bookmark.forEach(bookmark => {
        newState[bookmark.id] = bookmark
      });
      return {...newState,
        bookmark:action.bookmark
      }
    }    
    case ADD_BOOKMARK: {
      if(state[action.bookmark.id]) return
        const newState = {
          ...state,
          [action.bookmark.id]: action.bookmark,
        }
      return newState
    }
    case DELETE_BOOKMARK: {
      const newState = { ...state};
      delete newState[action.bookmark]
      return newState
    }
    default:
      return state;
  }
}

export default eventsReducer;
