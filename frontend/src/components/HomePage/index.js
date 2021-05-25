import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './HomePage.css'
import Event from './Events'

export default function HomePage(){
    return(
        <div>
            <Event />
        </div>
    )
}