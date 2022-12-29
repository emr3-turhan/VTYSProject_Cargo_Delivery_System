import React from 'react'
import DriverHeader from '../components/DriverHeader'
import AddDriver from '../components/AddDriver'
import DriverList from '../components/DriverList'

const Driver = () => {
    return (<div>
        <DriverHeader />
        <AddDriver />
        <DriverList />
    </div>
    )
}

export default Driver