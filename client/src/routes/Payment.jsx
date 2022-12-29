import React from 'react'
import PaymentHeader from '../components/PaymentHeader'
import AddPayment from '../components/AddPayment'
import PaymentList from '../components/PaymentList'

const Payment = () => {
    return (
        <div>
            <PaymentHeader />
            <AddPayment />
            <PaymentList />
        </div>
    )
}

export default Payment