"use client"
import { Provider } from "react-redux";
import makeStore from "./store";

const Prvdr = ({children}) => {
    const store = makeStore();  // Create the store once

    return(
        <Provider store = {store}>
            {children}

        </Provider>
    );
}

export default Prvdr;