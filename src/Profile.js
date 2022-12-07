import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'

function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='left'>
        <div className='profile'>
          <h1>Student Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Account Verified </strong>
            {`${currentUser?.emailVerified}`}
          </p>
           <button onClick={() => signOut(auth)}>Sign Out</button>
    
        </div>
        <div>
      <iframe width="450" height="530" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/9a3d6128-f1bd-4dd7-a9e4-e759b1d70730"></iframe>
      </div>
      </div>
  )
}

export default Profile