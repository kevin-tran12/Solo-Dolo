import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addOneBookmark,
  deleteOneBookmark,
  getBookmarks,
  getEvent,
} from "../../store/events";
import EventRow from "../EventRow";
import PageNotFound from "../PageNotFound";
import "./eventPage.css";

export default function EventPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector((state) => state.events.current);
  const session = useSelector((state) => state.session.user);
  let userId;
  const eventId = parseInt(id);
  const [save, setSave] = useState(true);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getBookmarks(userId));
  }, [dispatch]);
  let buttonText = "Thinking about it? Save it!";

  useEffect(() => {
    if (save) buttonText = "Thinking about it? Save it!";
    if (!save) buttonText = "Delete";
  }, [save]);
  if (session) userId = session.id;
  if (!session) return PageNotFound();
  const bookmark = () => dispatch(addOneBookmark({ eventId, userId }));
  const deleteBookmark = () => dispatch(deleteOneBookmark({ eventId, userId }));

  const saving = () => {
    if (save) {
      bookmark();
      return setSave(!save);
    }
    if (!save) {
      deleteBookmark();
      return setSave(!save);
    }
  };

  if (!event) return null;
  return (
    <div className="container">
      <h1>{`Price $${event.Tickets[0].price}`}</h1>
      <table className="tables">
        <thead className="table-elements">
          <tr>
            <th className="table-elements">Name</th>
            <th className="table-elements">Description</th>
            <th className="table-elements">Date</th>
            <th className="table-elements">Genre</th>
            <th className="table-elements">Venue</th>
            <th className="table-elements">City</th>
            <th className="table-elements">Capacity</th>
          </tr>
        </thead>
        <tbody className="table-elements">
          <EventRow key={event.id} event={event} />
          <tr className="table-elements button-container">
            <td>
              <Link to="/purchase" className="table-elements">
                <button className="buttons">Buy Tickets</button>
              </Link>
              {save && (
                <button className="buttons" onClick={() => saving()}>
                  Thinking about it? Save it!'
                </button>
              )}
              {!save && (
                <button className="buttons" onClick={() => saving()}>
                  Delete Bookmark
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
