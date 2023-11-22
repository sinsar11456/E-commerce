import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
import WidgetsLg from "../../components/widgetsLg/WidgetsLg";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data &&
          res.data.map((item) =>
            setUserStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], "Active Users": item.total },
            ])
          );
      } catch (error) {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetsSm />
        <WidgetsLg />
      </div>
    </div>
  );
}
