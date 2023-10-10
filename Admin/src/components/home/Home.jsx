import React from "react";
import "./home.css";
import Featuredinfo from "../featuredinfo/Featuredinfo";
import Chart from "../chart/Chart";

export default function Home() {
    return(
    <div className="home">
        <Featuredinfo/> 
        <Chart/>
    </div>
    );
}
