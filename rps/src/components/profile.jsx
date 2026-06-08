import defaultAvatar from "../assets/default-avatar.jpg";
import './profile.css'

function Profile({image, username}) {

    return(
        <div className='main'>
            <button 
            className='pfp'
            style={{
                backgroundImage: `url(${image ? image : defaultAvatar})`,
                backgroundSize: "cover",
            }} />
            <div className='player'>{username ? username : 'User12945'}</div>
        </div>
    )
}

export default Profile