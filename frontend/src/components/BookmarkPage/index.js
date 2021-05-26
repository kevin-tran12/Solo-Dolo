import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getBookmarks, deleteOneBookmark} from "../../store/events";
import PageNotFound from '../PageNotFound'
export default function BookmarkPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userId = parseInt(id)
  const bookmarks = useSelector((state) => state.events.bookmark);
  const user = useSelector(state => state.session.user.id);
  const [update,setUpdate]= useState(true)
  useEffect(() => {
    dispatch(getBookmarks(id));
    setUpdate(update)
  }, [dispatch,id,update]);


  if(user !== userId) return PageNotFound()
  const deleteBookmark = (eventId) => dispatch(deleteOneBookmark({ eventId, userId }));
  const deleting = (eventId) =>{
    deleteBookmark(eventId);
    return setUpdate(!update)
  }

  return (
    <div className="events">
      {bookmarks && 
      <div>
        <h2 className="heading">Bookmarks</h2>
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
         {bookmarks.map((bookmark) =>{
      return(<tr>
      <td className='table-elements'>{bookmark.Event.name}</td>
      <td className='table-elements'>{bookmark.Event.description}</td>
      <td className='table-elements'>{bookmark.Event.date}</td>
      <td className='table-elements'>{bookmark.Event.Category.genre}</td>
      <td className='table-elements'>{bookmark.Event.Venue.name}</td>
      <td className='table-elements'>{bookmark.Event.Venue.city}</td>
      <td className='table-elements'>{bookmark.Event.Venue.capacity}</td>
      <button className='buttons' onClick={() =>deleting(bookmark.Event.id)}>Delete</button>
    </tr>)})}
      </tbody>
        </table>
      </div>}
    </div>
  );
}
