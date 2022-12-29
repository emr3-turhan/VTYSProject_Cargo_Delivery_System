import React, { useState, createContext } from 'react';

export const ShipmentContext = createContext();

export const ShipmentsContextProvider = (props) => {
    const [shipments, setShipments] = useState([]);
    const [selectedShipment, setSelectedShipment] = useState(null);

    const addShipments = (shipment) => {
        setShipments([...shipments, shipment]);
    }

    return (
        <ShipmentContext.Provider value={{ shipments, setShipments, addShipments, selectedShipment, setSelectedShipment }}>
            {props.children}
        </ShipmentContext.Provider>

    )
}