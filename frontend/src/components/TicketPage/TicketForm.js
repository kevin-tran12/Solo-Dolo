import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addOneTicket, getEvent } from "../../store/events";
import PageNotFound from "../PageNotFound";
import "./TicketPage.css";

export default function TicketPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.events.current);
  const ticketPrice = event.Tickets.price
  const money = user.monies;
  console.log(ticketPrice)
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  if (!user) return PageNotFound();
  const userId = parseInt(user.id);
  const eventId = parseInt(id);
  const ticket = () => dispatch(addOneTicket({userId, eventId}));
  return (
    <div>

    <p>it works</p>
    </div>
  )
}
