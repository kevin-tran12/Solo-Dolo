import React from 'react'
import './PageNotFound.css'
import {useSelector} from 'react-redux'

export default function PageNotFound(){
    // const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let pages 
    if(user) pages =<h1>Page Not Found</h1>
    if(!user) pages= <h1>Log In to Continue</h1>
    return(
        <div>
            {pages}
        </div>
    )
}