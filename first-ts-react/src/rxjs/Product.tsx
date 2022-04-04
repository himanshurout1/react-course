import { useState } from "react";
import { prodSubject } from "./productService";

function Product() {

    const [prodName, setProdName] = useState("");

    function sendProductInfo() {
        console.log("sending prodName", prodName);
        prodSubject.next(prodName);
    }
    return (
        <div>
            <input type="text" value={prodName} onChange={event=>setProdName(event.target.value)}/>
            <button onClick={sendProductInfo}>Add</button>
        </div>
    );
}

export default Product;