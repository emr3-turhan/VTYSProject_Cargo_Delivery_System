import React, { useState, createContext } from "react";

export const DriverContext = createContext();

export const DriversContextProvider = (props) => {
    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [driversCount, setDriversCount] = useState(null);

    const addDrivers = (driver) => {
        setDrivers([...drivers, driver]);
    }

    return (
        <DriverContext.Provider value={{ drivers, setDrivers, addDrivers, selectedDriver, setSelectedDriver, driversCount, setDriversCount }}>
            {props.children}
        </DriverContext.Provider>

    )
}