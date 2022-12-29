import React, { useState, createContext } from "react";

export const PaymentContext = createContext();

export const PaymentsContextProvider = (props) => {
    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const addPayments = (payment) => {
        setPayments([...payments, payment]);
    }

    return (
        <PaymentContext.Provider value={{ payments, setPayments, addPayments, selectedPayment, setSelectedPayment }}>
            {props.children}
        </PaymentContext.Provider>

    )
}