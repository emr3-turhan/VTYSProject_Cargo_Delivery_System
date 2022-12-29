import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DeliveryContext } from '../context/DeliveryContext'
import DeliveryApi from '../apis/DeliveryApi'
import { useNavigate } from 'react-router-dom'


const DeliveryList = (props) => {
    const { deliveries, setDeliveries } = useContext(DeliveryContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DeliveryApi.get("/");
                setDeliveries(response.data.data.deliveries);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await DeliveryApi.delete(`/${id}`);
            setDeliveries(deliveries.filter(delivery => {
                return delivery.delivery_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/deliveries/${id}/update`)
    }

    const handleDeliverySelect = (id) => {
        navigate(`/deliveries/${id}`)
    }

    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Shipment Info</th>
                        <th scope="col">Driver First Name</th>
                        <th scope="col">Driver Last Name</th>
                        <th scope="col">Item Info</th>
                        <th scope="col">Vehicle Plate</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries && deliveries.map(delivery => {
                        return (
                            <tr onClick={() => handleDeliverySelect(delivery.delivery_id)} key={delivery.id}>
                                <td>{delivery.content}</td>
                                <td>{delivery.first_name}</td>
                                <td>{delivery.last_name}</td>
                                <td>{delivery.desription}</td>
                                <td>{delivery.license_plate}</td>
                                <td>{delivery.name}</td>


                                <td><button onClick={(e) => handleUpdate(e, delivery.delivery_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, delivery.delivery_id)} className="btn btn-success">Complete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DeliveryList