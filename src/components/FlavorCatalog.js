import { useState} from "react";
import flavors from "../data/flavors";
import FlavorItem from "./FlavorItem";

function FlavorCatalog({ order, setOrder }) {
    const addToOrder = (flavor) => {
        const exists = order.find((item) => {
            return item.id ==flavor.id;
        });

        if (exists) {
            const updated = order.map((item) => {
  
                if (item.id == flavor.id) {
                    return {
                        ...item, quantity: item.quantity + 1
                    };
                } else {
                    return item;

                }

            });

            setOrder(updated);
        } else {

            const newItem = {
                ...flavor, quantity: 1
            };
            const updated = [...order, newItem];
            setOrder(updated);
        }
    };
    return (
        <div className = "flavor-grid">
            {flavors.map((flavor) => {
                return (
                    <FlavorItem 
                        key={flavor.id} 
                        flavor={flavor} 
                        addToOrder={addToOrder}
                    />
                );
            })}
        </div>
    );
}
            
export default FlavorCatalog;