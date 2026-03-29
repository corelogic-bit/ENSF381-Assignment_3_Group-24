import { useEffect } from "react";
import OrderItem from "./OrderItem";


function OrderList({ order, setOrder }) {
    const removeItem = (id) => {
        const updated = order.map((item) => {
            if (item.id === id) {
                return {
                    ...item, 
                    quantity: item.quantity - 1
                };
            } else {
                return item;
            }
        });
        const filtered = updated.filter((item) => {
            return item.quantity > 0;
        });
        setOrder(filtered);
    };


    const total = order.reduce((sum, item) => {
        return sum + ( item.price * item.quantity );
    
    }, 0);

    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(order));
    }, [order]);
    
    return (
        <div className ="order-list">
            <h2>Your Order</h2>
            {order.length === 0 ? (
                <p>No items in your order.</p>
            ) : (
                <div>
                    {order.map((item) => {
                        return (
                            <OrderItem 
                                key={item.id} 
                                item={item} 
                                removeItem={removeItem}
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