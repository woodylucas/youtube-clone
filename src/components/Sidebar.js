import React from "react";
import "../Sidebar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={ExploreIcon} title="Explore" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Video" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
    </div>
  );
}

export default Sidebar;
