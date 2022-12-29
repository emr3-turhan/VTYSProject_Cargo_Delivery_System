import React from 'react'
import AddDelivery from '../components/AddDelivery'
import DeliveryHeader from '../components/DeliveryHeader'
import DeliveryList from '../components/DeliveryList'

const Delivery = () => {
    return (
        <div>
            <DeliveryHeader />
            <AddDelivery />
            <DeliveryList />
        </div>
    )
}

export default Delivery