import React, { useEffect, useState } from "react";
import "./FeaturesInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import FeatureItem from "./FeatureItem";
import { userRequest } from "../AxiosMethods";

const FeaturesInfo = () => {
  const [incomeStats, setIncomeStats] = useState([]);
  const [percent, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest().get("/orders/income");
        setIncomeStats(res.data);

        if (res.data.length > 1) {
          const percentageChange =
            ((res.data[1].total - res.data[0].total) / res.data[0].total) * 100;
          setPercentage(percentageChange);
        }
      } catch (err) {
        console.error("Error fetching income data:", err);
      }
    };
    getIncome();
  }, []);

  console.log(incomeStats);

  return (
    <div className="feature-info">
      {incomeStats.length > 0 && (
        <FeatureItem
          stuff={[
            {
              id: 1,
              title: "Revenue",
              money: `${incomeStats[1]?.total || incomeStats[0]?.total}`,
              moneyRate: `${percent.toFixed(2)}%`,
              icon: percent > 0 ? <ArrowUpward /> : <ArrowDownward />,
            },
            {
              id: 2,
              title: "Sales",
              money: `${incomeStats[0]?.total}`,
              moneyRate: "-1.4%", // Example value, adjust accordingly
              icon:
                parseFloat("-1.4") > 0 ? <ArrowUpward /> : <ArrowDownward />,
            },
            {
              id: 3,
              title: "Cost",
              money: "1,234", // Example value, adjust accordingly
              moneyRate: "3.4%", // Example value, adjust accordingly
              icon: parseFloat("3.4") > 0 ? <ArrowUpward /> : <ArrowDownward />,
            },
          ]}
          feature2="Compared to last month"
        />
      )}
    </div>
  );
};

export default FeaturesInfo;
