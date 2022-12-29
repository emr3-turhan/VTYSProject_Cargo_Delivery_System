import React from "react";
import AddressHeader from "../components/AddressHeader";
import AddAddress from "../components/AddAddress";
import AddressList from "../components/AddressList";

const Address = () => {
    return (
        <div>
            <AddressHeader />
            <AddAddress />
            <AddressList />
        </div>
    )
}

export default Address