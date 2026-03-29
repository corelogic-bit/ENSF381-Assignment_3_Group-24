function OrderItem({ item, removeItem}) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            <button className="remove" onClick={() => removeItem(item.id)}>
                Remove Item
            </button>
        </div>
    );
}
export default OrderItem;