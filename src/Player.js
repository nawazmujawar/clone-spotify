import React from "react";
import "./PLayer.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
function Player({spotify}) {
  return (
    <div className="player">
      <div className="player_body">
        {/* slidebar*/}
        <Sidebar />
        {/* body*/}
        <Body spotify={spotify} />
      </div>
      {/*footer */}
      <Footer/>
    </div>
  );
}

export default Player;
