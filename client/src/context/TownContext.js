import React, { useState, createContext } from 'react';

export const TownContext = createContext();

export const TownsContextProvider = (props) => {
    const [towns, setTowns] = useState([]);
    const [selectedTown, setSelectedTown] = useState(null);

    const addTowns = (town) => {
        setTowns([...towns, town]);
    }

    return (
        <TownContext.Provider value={{ towns, setTowns, addTowns, selectedTown, setSelectedTown }}>
            {props.children}
        </TownContext.Provider>

    )
}