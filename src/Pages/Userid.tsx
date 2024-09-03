import { useParams } from 'react-router-dom' 
import UserActivities from '../Component/UserActivities'
import UserProfile from '../Component/UserProfile'


const User=()=>{
    const {userid=""} = useParams()
  return (
    <div className='bg-pink-200 p-10'>
    
    <UserProfile userId={userid} />
    <UserActivities userId={userid} />
    
    </div>
  )
}

export default User

