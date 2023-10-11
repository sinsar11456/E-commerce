import React from "react";
import "./home.css";
import Featuredinfo from "../featuredinfo/Featuredinfo";
import Chart from "../chart/Chart";
import { userData } from "../../dummyData";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
import WidgetsLg from "../../components/widgetsLg/WidgetsLg";

export default function Home() {
    return(
    <div className="home">
        <Featuredinfo/> 
        <Chart data={userData} title= "User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetsSm />
            <WidgetsLg />
        </div>
    </div>
    );
}
