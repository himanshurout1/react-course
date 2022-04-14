import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './productSlice'
import { userListSelector } from "./todoSelector";




function ReduxProduct(props: any) {

    const [prodName, setProdName] = useState("");
    const selectorFn = (state: any) => state.product.userList;
    
    const userList = useSelector(userListSelector);
    const dispatch = useDispatch();


    function sendProductInfo() {
        console.log("sending prodName", prodName);
        dispatch(addProduct(prodName));
    }
    return (
        <div>
            <input type="text" value={prodName} onChange={event=>setProdName(event.target.value)}/>
            <button onClick={sendProductInfo}>Add Product</button>

            UserList:
            <ul>
                {
                   userList && userList.map((prodName: string)=>{
                       return <li>{prodName}</li>
                   }) 
                }
            </ul>
        </div>
    );
}

export default ReduxProduct;