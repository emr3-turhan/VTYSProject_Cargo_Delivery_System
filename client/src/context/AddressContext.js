import React, { useState, createContext } from "react";

export const AddressContext = createContext();

export const AddressesContextProvider = (props) => {
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const addAddresses = (address) => {
        setAddresses([...addresses, address]);
    }

    return (
        <AddressContext.Provider value={{ addresses, setAddresses, addAddresses, selectedAddress, setSelectedAddress }}>
            {props.children}
        </AddressContext.Provider>

    )
}