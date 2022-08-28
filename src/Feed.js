import React from 'react'
import Story from './Story'
import Post from './Post'
import './Feed.css'
import MessageSender from './MessageSender' 
function Feed() {
  return (
    <div className='feed'>
        <Story />
        <MessageSender />
        <Post 
      
        profileImage="https://cdn.quotesgram.com/small/72/77/1316692850-jim-morrison.jpg"
        message="this work"
        timestamp="thisis a timestamp"
        username="miral khadhraoui"
        image="https://i.insider.com/4d518670cadcbbde2b030000?width=600&format=jpeg&auto=webp"
        />

        <Post 
      
      profileImage="https://cdn.quotesgram.com/small/72/77/1316692850-jim-morrison.jpg"
      message="this work"
      timestamp="thisis a timestamp"
      username="miral khadhraoui"
      image="https://i.insider.com/4d518670cadcbbde2b030000?width=600&format=jpeg&auto=webp"
      />

        <Post 
      
      profileImage="https://cdn.quotesgram.com/small/72/77/1316692850-jim-morrison.jpg"
      message="this work"
      timestamp="thisis a timestamp"
      username="miral khadhraoui"
      image="https://i.insider.com/4d518670cadcbbde2b030000?width=600&format=jpeg&auto=webp"
      />
    </div>
  )
}

export default Feed