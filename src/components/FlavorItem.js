import { useState } from "react";
function FlavorItem({ flavor, addToOrder }) {
    const [showDesc, setShowDesc] = useState(false);

    return (
        <div
            className = "flavor-card"
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)}
        >
            <img src={flavor.image} alt={flavor.name} width="150" />
            <h3>{flavor.name}</h3>
            <p>{flavor.price}</p>
            {showDesc && <p>{flavor.description}</p>}
            <button onClick={() => addToOrder(flavor)}>
                Add to Order
            </button>
        </div>

    );
}
export default FlavorItem;