import React from "react";
import "../Header.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <MenuIcon />
      <img
        className="header__logo"
        src="https://i.pinimg.com/originals/d8/23/75/d82375c1590f1197f481fae586ccf9f1.png"
        alt="#"
      />
      <input type="text" />
      <SearchIcon />
      <MicIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar
        src="https://ih1.redbubble.net/image.1353511971.2169/fposter,small,wall_texture,product,750x1000.jpg"
        alt="bear"
      />
    </div>
  );
}

export default Header;
