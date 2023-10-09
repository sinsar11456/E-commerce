import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredinfo.css";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItems">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,33</span>
          <span className="featuredMoneyRate">
            -11.3 <ArrowDownward className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,55</span>
          <span className="featuredMoneyRate">
            -0.5.3 <ArrowDownward className="featuredIcon negative"  />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,33</span>
          <span className="featuredMoneyRate">
            +6.3 <ArrowUpward className="featuredIcon " />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
