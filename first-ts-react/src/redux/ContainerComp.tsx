import { Provider } from "react-redux";
import { Counter } from "./Counter";
import ReduxProduct from "./ReduxProduct";
import ReduxProductList from "./ReduxProductList";
import store from "./store";

export default function ContainerComp(){
    return (
        <Provider store={store}>
            {/* <Counter/> */}
            <ReduxProduct />
            <hr/>
            <ReduxProductList />
        </Provider>
    );
}
