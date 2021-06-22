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
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
          alt="#"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
        <MicIcon />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          src="https://ih1.redbubble.net/image.1353511971.2169/fposter,small,wall_texture,product,750x1000.jpg"
          alt="bear"
        />
      </div>
    </div>
  );
}

export default Header;
