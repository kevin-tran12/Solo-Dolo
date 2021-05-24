import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './HomePage.css'
import Event from './Events'

export default function HomePage(){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>hi im working</h1>
            <Event />
        </div>
    )
}