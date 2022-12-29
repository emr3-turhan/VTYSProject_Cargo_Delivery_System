import React from 'react'
import OrderHeader from '../components/OrderHeader'
import AddOrder from '../components/AddOrder'
import OrderList from '../components/OrderList'



const Order = () => {
    return (<div>
        <OrderHeader />
        <AddOrder />
        <OrderList />
    </div>
    )
}

export default Order