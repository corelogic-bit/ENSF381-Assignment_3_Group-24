import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlavorCatalog from "./FlavorCatalog";
import OrderList from "./OrderList";

function FlavorsPage() {
  const [orderItems, setOrderItems] = useState([]);

  // Load order data from local storage on mount
  useEffect(() => {
    var savedOrder = localStorage.getItem("orderItems");
    if (savedOrder) {
      setOrderItems(JSON.parse(savedOrder));
    }
  }, []);

  function handleAddToOrder(flavor) {
    setOrderItems(function (prevItems) {
      var existingItem = prevItems.find(function (item) {
        return item.id === flavor.id;
      });

      if (existingItem) {
        return prevItems.map(function (item) {
          if (item.id === flavor.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...prevItems, { ...flavor, quantity: 1 }];
      }
    });
  }

  function handleRemoveItem(flavorId) {
    setOrderItems(function (prevItems) {
      return prevItems
        .map(function (item) {
          if (item.id === flavorId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(function (item) {
          return item.quantity > 0;
        });
    });
  }

  return (
    <div className="flavors-page">
      <Header />
      <div className="content">
        <FlavorCatalog onAddToOrder={handleAddToOrder} />
        <OrderList orderItems={orderItems} onRemoveItem={handleRemoveItem} />
      </div>
      <Footer />
    </div>
  );
}

export default FlavorsPage;
