import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 000,
    },
    {
      name: "Apr",
      "Active User": 2780,
    },
    {
      name: "May",
      "Active User": 1890,
    },
    {
      name: "June",
      "Active User": 2390,
    },
    {
      name: "July",
      "Active User": 3490,
    },
    {
      name: "Aug",
      "Active User": 3490,
    },
    {
      name: "Sep",
      "Active User": 3490,
    },
    {
      name: "Oct",
      "Active User": 3490,
    },
    {
      name: "Nov",
      "Active User": 3490,
    },
    {
      name: "Dec",
      "Active User": 3490,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart date={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
