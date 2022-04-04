import { useEffect } from "react";
import { prodSubject } from "./productService";

function Cart() {

   useEffect(()=>{
        prodSubject.subscribe(data=> {
            console.log("data received in cart:", data);
        });
   }, []);

    return (
        <div>
            <div>Cart</div>
        </div>
    );
}

export default Cart;