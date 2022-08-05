import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/online'

export default function Rightbar(){
    return(
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src="/assets/post/regalo-gift.gif" alt="" />
                    
                    <span className='birthdayText'> <b>Paula Clauss</b> and  <b>3 other friends</b> hav a birthday today</span>
                </div>
                <img className='rightbarAd' src="/assets/post/feliz-cumple.jpg" alt="" />
                <h4 className='rightbarTitle'>Online friends</h4>

                <ul className='rightbarFriendList'>
                  
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}