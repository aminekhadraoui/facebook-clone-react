import React from 'react'
import "./StoryFeed.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';
function StoryFeed({image, profileSrc, title}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='story'>
        <FaceIcon src={profileSrc} className="story-avatar" />
        <h4>{title}</h4>
    </div>
  )
}

export default StoryFeed