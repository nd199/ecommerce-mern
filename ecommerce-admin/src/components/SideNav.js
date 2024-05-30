import React from "react";
import "./SideNav.css";
import SideMenu from "./SideMenu";
import {
  BarChartOutlined,
  CurrencyRupeeOutlined,
  Inventory2Outlined,
  TimelineOutlined,
  TrendingUpOutlined,
  Person4Outlined,
  LineStyleOutlined,
  MailOutline,
  DynamicFeedOutlined,
  ChatBubbleOutlineRounded,
  ManageAccountsOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="side-wrapper">
        <SideMenu
          title={"Dashboard"}
          stuff={[
            {
              id: 1,
              name: "Home",
              icon: <LineStyleOutlined />,
              link: "/",
            },
            { id: 2, name: "Analytics", icon: <TimelineOutlined /> },
            { id: 3, name: "Sales", icon: <TrendingUpOutlined /> },
          ]}
        />
        <SideMenu
          title={"Quick Menu"}
          stuff={[
            { id: 1, name: "Users", icon: <Person4Outlined />, link: "/Users" },
            {
              id: 2,
              name: "Products",
              icon: <Inventory2Outlined />,
              link: "/Products",
            },
            { id: 3, name: "Transactions", icon: <CurrencyRupeeOutlined /> },
            { id: 4, name: "Reports", icon: <BarChartOutlined /> },
          ]}
        />
        <SideMenu
          title={"Notifications"}
          stuff={[
            { id: 1, name: "Mail", icon: <MailOutline /> },
            { id: 2, name: "FeedBack", icon: <DynamicFeedOutlined /> },
            { id: 3, name: "Messages", icon: <ChatBubbleOutlineRounded /> },
          ]}
        />
        <SideMenu
          title={"Staff"}
          stuff={[
            { id: 1, name: "Manage", icon: <ManageAccountsOutlined /> },
            { id: 2, name: "Analytics", icon: <DynamicFeedOutlined /> },
            { id: 3, name: "Reports", icon: <ChatBubbleOutlineRounded /> },
          ]}
        />
      </div>
    </div>
  );
};

export default SideNav;
