import React, { useState, createContext } from 'react';

export const SituationContext = createContext();

export const SituationsContextProvider = (props) => {
    const [situations, setSituations] = useState([]);
    const [selectedSituation, setSelectedSituation] = useState(null);

    const addSituations = (situation) => {
        setSituations([...situations, situation]);
    }


    return (
        <SituationContext.Provider value={{ situations, setSituations, addSituations, selectedSituation, setSelectedSituation }}>
            {props.children}
        </SituationContext.Provider>
    )
}