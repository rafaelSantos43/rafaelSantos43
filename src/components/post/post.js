import './post.css'
import {MoreVert, ThumbUp, Favorite} from '@mui/icons-material'
import {Users} from '../../dummyData'
import { useState } from 'react'

export default function Post({post }){
   const [like, setLike] = useState(post.like)
   const [isliked, setIsliked] = useState(false)

   const likeAction = ()=>{
    setLike(isliked? like-1 : like+1)
    setIsliked(!isliked)
   }
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src= {Users.filter((u)=> u.id === post?.userId)[0].profilePicture} />
                        <span className='postUsername'>{Users.filter((u)=> u.id === post?.userId)[0].UserName}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>

                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>

                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <ThumbUp  className='likeIcon' onClick={likeAction}/>
                        <Favorite className='likeIcon' onClick={likeAction}/>
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>

                   

                    <div className='postBottomRight'>
                        <div className='postCommentText'>{} comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}