import React, { useEffect } from "react";
import OrderItem from "./OrderItem";

function OrderList({ orderItems, onRemoveItem }) {

  // Save order data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems]);

  // Calculate total price
  var total = 0;
  for (var i = 0; i < orderItems.length; i++) {
    var price = parseFloat(orderItems[i].price.replace("$", ""));
    total += price * orderItems[i].quantity;
  }

  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {orderItems.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <div>
          {orderItems.map(function (item) {
            return (
              <OrderItem
                key={item.id}
                item={item}
                onRemoveItem={onRemoveItem}
              />
            );
          })}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default OrderList;
