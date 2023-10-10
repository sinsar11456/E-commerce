import React from "react";
import "./home.css";
import Featuredinfo from "../featuredinfo/Featuredinfo";
import Chart from "../chart/Chart";
import { userData } from "../../dummyData";

export default function Home() {
    return(
    <div className="home">
        <Featuredinfo/> 
        <Chart data={userData} title= "User Analytics" grid dataKey="Active User"/>

    </div>
    );
}
