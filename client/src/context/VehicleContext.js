import React, { useState, createContext } from 'react';

export const VehicleContext = createContext();

export const VehiclesContextProvider = (props) => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const addVehicles = (vehicle) => {
        setVehicles([...vehicles, vehicle]);
    }

    return (
        <VehicleContext.Provider value={{ vehicles, setVehicles, addVehicles, selectedVehicle, setSelectedVehicle }}>
            {props.children}
        </VehicleContext.Provider>

    )
}