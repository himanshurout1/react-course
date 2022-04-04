import { useEffect } from "react";
import { prodSubject } from "./productService";

function ProductList() {

   useEffect(()=>{
        prodSubject.subscribe(data=> {
            console.log("data received in prod list", data);
        });
   }, []);

    return (
        <div>
            <div>List of Products</div>
        </div>
    );
}

export default ProductList;