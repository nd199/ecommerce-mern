import React, { useEffect, useState } from "react";
import "./WidgetsLarge.css";
import { userRequest } from "../AxiosMethods";
import { format } from "timeago.js";

const WidgetsLarge = () => {
  const Button = ({ type }) => {
    return <button className={`wlButton ${type}`}>{type}</button>;
  };

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderData = await userRequest().get("/orders");
        const userWithOrder = await Promise.all(
          orderData.data.orders.map(async (order) => {
            try {
              const user = await userRequest().get(`/users/${order.userId}`);
              return { ...order, user: user.data };
            } catch (error) {
              if (error.response && error.response.status === 404) {
                return order;
              } else {
                throw error;
              }
            }
          })
        );
        setOrders(userWithOrder);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="widgetLarge">Loading...</div>;
  }

  if (error) {
    return <div className="widgetLarge">Error: {error.message}</div>;
  }

  return (
    <div className="widgetLarge">
      <h3 className="wlTitle">Latest Transactions</h3>
      <table className="wlTable">
        <thead>
          <tr className="wlTr">
            <th className="wlTh">Customer</th>
            <th className="wlTh">Last Transaction</th>
            <th className="wlTh">Amount</th>
            <th className="wlTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="wlTr" key={order._id}>
              <td className="wlUser">
                <img
                  src={
                    order.user?.image ||
                    "https://images.unsplash.com/photo-1609741200119-b292937ea2eb?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  className="wlImg"
                />
                <span className="wlName">{order.user?.username}</span>
              </td>
              <td className="wlDate">{format(order.updatedAt)}</td>
              <td className="wlAmount">&#8377;{order.amount}</td>
              <td className="wlStatus">
                <Button type={order.status} className="wlStatusApproved" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetsLarge;
