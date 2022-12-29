import React from 'react'
import AddShipment from '../components/AddShipment'
import ShipmentHeader from '../components/ShipmentHeader'
import ShipmentList from '../components/ShipmentList'

const Shipment = () => {
    return (
        <div>
            <ShipmentHeader />
            <AddShipment />
            <ShipmentList />
        </div>
    )
}

export default Shipment