import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput "
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Enter Room
          </button>
        </Link>
      </div>
      <div className="joinInfo">
        <h2>
          Tired of creating temporary social media groups for one-time
          discussions 🤷‍♀️🤷‍♂️
        </h2>
        <h2>well not now 🙂</h2>
        <h2>Use chat Room, Chat it-Forget it..</h2>
        <h2>
          Create a room, Enter, and share the room name to friends and chat :)
        </h2>
      </div>
    </div>
  );
};

export default Join;
