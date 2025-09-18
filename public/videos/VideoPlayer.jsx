import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
      <video width="300" height="200" controls autoplay loop muted style={ { borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}  >
        <source src="" type="" />
      </video>
    </div>
  )
}

export default VideoPlayer
