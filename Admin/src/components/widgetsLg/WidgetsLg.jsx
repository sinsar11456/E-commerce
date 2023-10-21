import "./widgetsLg.css";

export default function WidgetsLg() {
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
        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetsLgImg"
            />
            <span className="WidgetsLgName">Susan Mole</span>
          </td>
          <td className="widgetsLgDate">2 jun 2021</td>
          <td className="widgetsLgAmount">$132.00</td>
          <td className="widgetsLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetsLgImg"
            />
            <span className="WidgetsLgName">Susan Mole</span>
          </td>
          <td className="widgetsLgDate">2 jun 2021</td>
          <td className="widgetsLgAmount">$132.00</td>
          <td className="widgetsLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetsLgImg"
            />
            <span className="WidgetsLgName">Susan Mole</span>
          </td>
          <td className="widgetsLgDate">2 jun 2021</td>
          <td className="widgetsLgAmount">$132.00</td>
          <td className="widgetsLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetsLgImg"
            />
            <span className="WidgetsLgName">Susan Mole</span>
          </td>
          <td className="widgetsLgDate">2 jun 2021</td>
          <td className="widgetsLgAmount">$132.00</td>
          <td className="widgetsLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
         
      </table>
    </div>
  );
}
