import React from "react";
import "../Sidebar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={ExploreIcon} title="Explore" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
    </div>
  );
}

export default Sidebar;
