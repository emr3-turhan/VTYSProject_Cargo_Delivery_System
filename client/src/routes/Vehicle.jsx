import React from 'react'
import AddVehicle from '../components/AddVehicle'
import VehicleHeader from '../components/VehicleHeader'
import VehicleList from '../components/VehicleList'


const Vehicle = () => {
    return (<div>
        <VehicleHeader />
        <AddVehicle />
        <VehicleList />

    </div>
    )
}

export default Vehicle