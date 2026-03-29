import { useState } from "react";
import FlavorCatalog from "../components/FlavorCatalog";
import OrderList from "../components/OrderList";
import Header from "../components/Header";
import Footer from "../components/Footer";


function FlavorsPage() {
    const [order, setOrder] = useState([]);


    return (
        <div className="flavors-page">
            <Header />
            <div className="content">
                <FlavorCatalog order={order} setOrder={setOrder} />
                <OrderList order={order} setOrder={setOrder} />
            </div>
            <Footer/>
        </div>
    );
    
}
export default FlavorsPage;