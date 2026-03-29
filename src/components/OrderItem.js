function OrderItem({ item, removeItem}) {
    return (
        <div>
            <p>{item.name} x {item.quantity} </p>
            <p>${(item.price) * (item.quantity)}</p>
            <button className="remove" onClick={() => removeItem(item.id)}>
                Remove Item
            </button>
        </div>
    );
}
export default OrderItem;