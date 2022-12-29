import React, { useEffect } from 'react'
import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import OrderApi from '../apis/OrderApi'
import { useNavigate } from 'react-router-dom'



const OrderList = (props) => {
    const { orders, setOrders } = useContext(OrderContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await OrderApi.get("/");
                setOrders(response.data.data.orders);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await OrderApi.delete(`/${id}`);
            setOrders(orders.filter(order => {
                return order.order_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/orders/${id}/update`)
    }

    const handleOrderSelect = (id) => {
        navigate(`/orders/${id}`)
    }



    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Company Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return (
                            <tr onClick={() => handleOrderSelect(order.order_id)} key={order.id}>
                                <td>{order.company_name}</td>
                                <td>{order.description}</td>
                                <td>{order.address}</td>


                                <td><button onClick={(e) => handleUpdate(e, order.order_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, order.order_id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrderList