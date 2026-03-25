import React from "react";

function OrderItem({ item, onRemoveItem }) {
  var price = parseFloat(item.price.replace("$", ""));
  var totalPrice = (price * item.quantity).toFixed(2);

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${totalPrice}</p>
      <button className="remove" onClick={() => onRemoveItem(item.id)}>Remove Item</button>
    </div>
  );
}

export default OrderItem;
