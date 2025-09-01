import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setextended] = useState(false);
  return (
    <div className="Sidebar">
      <div className="top">
        <img onClick={() => setextended(prev=>!prev)} className="menu" src={assets.menu_icon}></img>
        <div className="new-chat">
          <img src={assets.plus_icon}></img>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-titles">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon}></img>
              <p>What is React...</p>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} />
          {extended? <p>Help!</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> :null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
