import React, { useEffect, useContext } from 'react'
import ShipmentApi from '../apis/ShipmentApi';
import { ShipmentContext } from '../context/ShipmentContext';
import { useNavigate } from 'react-router-dom'

const ShipmentList = (props) => {
    const { shipments, setShipments } = useContext(ShipmentContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ShipmentApi.get("/");
                setShipments(response.data.data.shipments);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await ShipmentApi.delete(`/${id}`);
            setShipments(shipments.filter(shipment => {
                return shipment.shipment_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/shipments/${id}/update`)
    }

    const handleShipmentSelect = (id) => {
        navigate(`/shipments/${id}`)
    }



    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Sender Company Name</th>
                        <th scope="col">Recipient Company Name</th>
                        <th scope="col">Sender Address</th>
                        <th scope="col">Recipient Address</th>
                        <th scope="col">Content</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments && shipments.map(shipment => {
                        return (
                            <tr onClick={() => handleShipmentSelect(shipment.shipment_id)} key={shipment.id}>
                                <td>{shipment.sender_name}</td>
                                <td>{shipment.recipient_name}</td>
                                <td>{shipment.sender_address}</td>
                                <td>{shipment.recipient_address}</td>
                                <td>{shipment.content}</td>
                                <td>{shipment.status_name}</td>


                                <td><button onClick={(e) => handleUpdate(e, shipment.shipment_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, shipment.shipment_id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div >
    )
}

export default ShipmentList