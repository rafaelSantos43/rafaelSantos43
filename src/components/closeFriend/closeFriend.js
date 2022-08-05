import './closeFriend.css'

export default function CloseFriend({user}) {
    return (
        <li className='sidebarFriends'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
            <span className='sidebarFriendName'>{user.UserName}</span>
        </li>
    )
}