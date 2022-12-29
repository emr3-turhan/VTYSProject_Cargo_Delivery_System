import React, { useState, createContext } from 'react';

export const DeliveryContext = createContext();

export const DeliveriesContextProvider = (props) => {
    const [deliveries, setDeliveries] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(null);

    const addDeliveries = (delivery) => {
        setDeliveries([...deliveries, delivery]);
    }

    return (
        <DeliveryContext.Provider value={{ deliveries, setDeliveries, addDeliveries, selectedDelivery, setSelectedDelivery }}>
            {props.children}
        </DeliveryContext.Provider>
    )
}