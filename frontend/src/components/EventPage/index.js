import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import eventsReducer from '../../store/events'
import './eventPage.css'
import EventRow from '../EventRow'

export default function EventPage(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() =>{
        dispatch(getOneEvent(id))
    },[dispatch,id])

    const event = useSelector(state => state.events)

    if(!event) return

    return (
        <div>
            
        </div>
    )
}