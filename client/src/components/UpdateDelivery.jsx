import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import DeliveryApi from '../apis/DeliveryApi';
import { DeliveryContext } from '../context/DeliveryContext';



const UpdateDelivery = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { deliveries } = useContext(DeliveryContext);
    const [shipment_id, setShipment_id] = useState("")
    const [driver_id, setDriver_id] = useState("")
    const [order_id, setOrder_id] = useState("")
    const [vehicle_id, setVehicle_id] = useState("")
    const [situation_id, setSituation_id] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await DeliveryApi.get(`/${id}`);
            console.log(response.data.data);
            setShipment_id(response.data.data.delivery.shipment);
            setDriver_id(response.data.data.delivery.driver);
            setOrder_id(response.data.data.delivery.order_name);
            setVehicle_id(response.data.data.delivery.vehicle);
            setSituation_id(response.data.data.delivery.status);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedDelivery = await DeliveryApi.put(`/${id}`, {
            shipment_id,
            driver_id,
            order_id,
            vehicle_id,
            situation_id
        });
        navigate("/menuofdeliveries");
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/menuofdeliveries");
    };


    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="shipment_id">Shipment Id</label>
                    <input value={shipment_id} onChange={e => setShipment_id(e.target.value)} id="shipment_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="driver_id">Driver Id</label>
                    <input value={driver_id} onChange={e => setDriver_id(e.target.value)} id="driver_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="order_id">Order Id</label>
                    <input value={order_id} onChange={e => setOrder_id(e.target.value)} id="order_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_id">Vehicle Id</label>
                    <input value={vehicle_id} onChange={e => setVehicle_id(e.target.value)} id="vehicle_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="situation_id">Situation Id</label>
                    <input value={situation_id} onChange={e => setSituation_id(e.target.value)} id="situation_id" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateDelivery