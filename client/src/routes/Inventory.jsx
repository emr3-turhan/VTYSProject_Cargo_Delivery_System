import React from 'react'
import InventoryHeader from '../components/InventoryHeader'
import AddInventory from '../components/AddInventory'
import InventoryList from '../components/InventoryList'

const Inventory = () => {
    return (<div>
        <InventoryHeader />
        <AddInventory />
        <InventoryList />
    </div>
    )
}

export default Inventory