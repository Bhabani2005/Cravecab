import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets/assets.js";

function Myorders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      setData(response.data.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders my-12 mx-0">
      <h2 className="text-2xl font-bold">My orders</h2>
      <div className="container flex flex-col gap-5 mt-7">
        {data.length > 0 ? (
          data.map((order, index) => (
            <div
              key={index}
              className="my-orders-order grid md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center text-sm py-3 px-5 text-[#454545] border border-[1px_solid_tomato] grid-cols-[1fr_2fr_1fr] row-gap-[5px] text-[12px] md:text-[15px]"
            >
              <img className="w-12" src={assets.parcel_icon} alt="Order icon" />
              <p>
                {order.items &&
                  order.items.map((item, index) => {
                    return `${item.name} x ${item.quantity}${index === order.items.length - 1 ? "" : ", "
                      }`;
                  })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items?.length || 0}</p>
              <p>
                <span className="text-[tomato]">&#x25cf;</span> <b className="font-semibold text-[#454545]">{order.status}</b>
              </p>
              <button onClick={fetchOrders} className="border border-[#454545] bg-[#ffe1e1] rounded-lg py-3 px-0 text-[#454545] cursor-pointer md:text-sm text-[10px]">
                Track Order
              </button>
            </div>
          ))
        ) : (
          <p>No orders available</p>
        )}
      </div>
    </div>
  );
}

export default Myorders;
