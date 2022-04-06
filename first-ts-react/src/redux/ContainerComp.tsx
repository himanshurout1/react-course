import { Provider } from "react-redux";
import { Counter } from "./Counter";
import store from "./store";

export default function ContainerComp(){
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}
