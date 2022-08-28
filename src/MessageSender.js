import React, { useState } from 'react'
import "./MessageSender.css"
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function MessageSender() {
    const [input,setInput] = useState('')
    const [imgUrl,setImageUrl] = useState('')
  const handSubmit = e=>{
    e.preventDefault()
    setInput('')
    setImageUrl('')
  }
    return (
    <div className='messageSender'>
        <div className='messageSender-top'>
            <PeopleIcon />
            <form>
            <input type="text" placeholder="what's on your mind"
            value={input} onChange={(e) => setInput(e.target.value)}
            />
            <input type="text" placeholder='image url'
            value={imgUrl} onChange={(e) => setImageUrl(e.target.value)}
            />
            <button onClick={handSubmit} type="submit">
                hidden buttom 
            </button>
            </form>
        </div>
        <div className='messageSender-bottom'>
            <div className='messageSender-option'>
                <VideocamIcon style={{color:'red'}}/>
                <h3>Live Video</h3>
                
            </div>

            <div className='messageSender-option'>
                
                <AddPhotoAlternateIcon style={{color:'green'}} />
                <h3>Photo/Video</h3>
            </div>

            <div className='messageSender-option'>
                
                <EmojiEmotionsIcon style={{color:'orange'}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender