import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat-Room</h1>
      <h2>
        Made with React, Express, Socket.io and{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        By{" "}
        <a
          className="alok-link"
          href="https://alok-kumar.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Alok 🙂
        </a>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>
          {users.length !== null ? users.length : 0} People currently chatting:
        </h1>
        <div className="activeContainer">
          <h2>
            <ScrollToBottom className="users-list">
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  💚 {name}
                </div>
              ))}
            </ScrollToBottom>
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
