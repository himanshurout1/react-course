import { useEffect } from "react";
import Cart from "./Cart";
import { prodSubject } from "./productService";

function Dashboard() {

    return (
        <div>
            <Cart />
        </div>
    );
}

export default Dashboard;