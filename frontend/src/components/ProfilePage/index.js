import { useSelector } from 'react-redux'
import BookmarkPage from '../BookmarkPage'

export default function ProfilePage(){
    const user = useSelector(state => state.session.user)
    console.log(user,'user')
    
    return (
        <BookmarkPage key={`user.id`}/>
    )
}