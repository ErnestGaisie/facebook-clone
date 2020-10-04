import React from "react";
import "./Feed.css";
import StoryReel from "./storyReel/StoryReel";
import MessageSender from "./messageSender/MessageSender";
import Post from "./post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic=""
        message="FIRST POST"
        timestamp="time"
        imgName=""
        username="Gaisie"
      />

      {/* 
      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
}

export default Feed;
