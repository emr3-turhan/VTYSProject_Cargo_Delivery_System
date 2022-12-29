import React, { useState, createContext } from "react";

export const OrderContext = createContext();

export const OrdersContextProvider = (props) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const addOrders = (order) => {
        setOrders([...orders, order]);
    }

    return (
        <OrderContext.Provider value={{ orders, setOrders, addOrders, selectedOrder, setSelectedOrder }}>
            {props.children}
        </OrderContext.Provider>

    )
}
