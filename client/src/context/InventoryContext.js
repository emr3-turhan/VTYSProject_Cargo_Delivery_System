import React, { useState, createContext } from 'react';

export const InventoryContext = createContext();

export const InventoryContextProvider = (props) => {
    const [inventories, setInventories] = useState([]);
    const [selectedInventory, setSelectedInventory] = useState(null);
    const [inventoriesCount, setInventoriesCount] = useState(null);

    const addInventories = (inventory) => {
        setInventories([...inventories, inventory]);
    }


    return (
        <InventoryContext.Provider value={{ inventories, setInventories, addInventories, selectedInventory, setSelectedInventory, inventoriesCount, setInventoriesCount }}>
            {props.children}
        </InventoryContext.Provider>
    )
}