import React, { useState,useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('order')) || []);

  useEffect(()=>{
    setOrders(JSON.parse(localStorage.getItem('orders')))
  },[])
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <>
      <h1 style={{marginTop:'60px'}}>Orders for Your Products</h1>
      {orders.length > 0 ? (
        <table id="customers">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Mobile</th>
              <th>Shipping Address</th>
              <th>Order Items</th>
              <th>Ordered on</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.mobile}</td>
                <td>{order.address}</td>
                <td>
                  <ul>
                    {order.order_items.map((item, index) => (
                      <p key={index}>
                        {item?.product_name} - Quantity: {item.quantity}
                      </p>
                    ))}
                  </ul>
                </td>
                <td>{formatDate(orders?.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </>
  );
}

export default Orders;
