import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetsLg.css";
import { format } from "timeago.js"

export default function WidgetsLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (error) {}
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetsLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetsLg">
      <h3 className="widgetsLgTitle">Latest Transactions</h3>
      <table className="widgetsLgTable">
        <tr className="widgetsLgTableTr">
          <th className="widgetsLgTh">Customer</th>
          <th className="widgetsLgTh">Data</th>
          <th className="widgetsLgTh">Amount</th>
          <th className="widgetsLgTh">Status</th>
        </tr>
        {orders.map((order) => (

        <tr className="widgetsLgTr" key={order._id}>
          <td className="widgetsLgUser">
            <img
              src={order.img}
              alt=""
              className="widgetsLgImg"
            />
            <span className="WidgetsLgName">{order.userId}</span>
          </td>
          <td className="widgetsLgDate">{format(order.createdAt)}</td>
          <td className="widgetsLgAmount">${order.amount}</td>
          <td className="widgetsLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
        ))}
      </table>
    </div>
  ); 
}
