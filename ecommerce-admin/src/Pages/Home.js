import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import FeaturesInfo from "../components/FeaturesInfo";
import Chart from "../components/Chart";
import UserData from "../Data";
import WidgetsSmall from "../components/WidgetsSmall";
import WidgetsLarge from "../components/WidgetsLarge";
import { userRequest } from "../AxiosMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() => {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  }, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest().get("/users/all/stats");
        const formattedData = res.data.map((item) => ({
          name: MONTHS[item._id - 1],
          "Active User": item.total,
        }));
        setUserStats(formattedData);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturesInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetsSmall />
        <WidgetsLarge />
      </div>
    </div>
  );
};

export default Home;
