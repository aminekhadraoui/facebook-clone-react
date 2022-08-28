import React from 'react'
import "./Post.css"
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
function Post({username,message,timestamp,image,profileImage}) {
  return (
    <div className='Post'>
        <div className='post-top'>
            <PeopleIcon src={profileImage} className='post_avatar'/>
            <div className='post_topInfo'>
                <h3>{username}</h3>
                <p>Timestamp...</p>
            </div>
        </div>
        <div className='post-bottom'>
            <p>{message}</p>
        </div>
        <div className='post-image'>
            <img src={image} alt=""/>
        </div>
        <div className='post-options'>
            <div className='post-option'>
                <ThumbUpIcon/>
                <p>Like</p>
            </div>
            <div className='post-option'>
                <CommentIcon/>
                <p>Comment</p>
            </div>
            <div className='post-option'>
                <ReplyIcon/>
                <p>share</p>
            </div>

        </div>
    </div>
  )
}

export default Post