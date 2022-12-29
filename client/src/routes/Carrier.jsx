import React from 'react'
import CarrierHeader from '../components/CarrierHeader'
import AddCarrier from '../components/AddCarrier'
import CarrierList from '../components/CarrierList'

const Carrier = () => {
    return (<div>
        <CarrierHeader />
        <AddCarrier />
        <CarrierList />

    </div>
    )
}

export default Carrier