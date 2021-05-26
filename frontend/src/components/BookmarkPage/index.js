import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams, NavLink } from "react-router-dom";
import { getBookmarks } from "../../store/events";

export default function BookmarkPage() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const bookmarks = useSelector((state) => console.log());
  useEffect(() => {
    dispatch(getBookmarks(userId));
  }, [dispatch]);

  return (
    <div className='events'>
      <div>
        <h2 className='heading'>Bookmarks</h2>
        <table className='tables'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Venue</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};