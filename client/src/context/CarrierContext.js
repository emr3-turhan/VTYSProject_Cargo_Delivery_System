import React, { useState, createContext } from 'react';

export const CarrierContext = createContext();

export const CarriersContextProvider = (props) => {
    const [carriers, setCarriers] = useState([]);
    const [selectedCarrier, setSelectedCarrier] = useState(null);
    const [carriersCount, setCarriersCount] = useState(null);

    const addCarriers = (carrier) => {
        setCarriers([...carriers, carrier]);
    }


    return (
        <CarrierContext.Provider value={{ carriers, setCarriers, addCarriers, selectedCarrier, setSelectedCarrier, carriersCount, setCarriersCount }}>
            {props.children}
        </CarrierContext.Provider>
    )
}