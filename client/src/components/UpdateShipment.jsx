import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ShipmentApi from '../apis/ShipmentApi';
import { ShipmentContext } from '../context/ShipmentContext';

const UpdateShipment = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const [sender_id, setSender_id] = useState("");
    const [recipient_id, setRecipient_id] = useState("");
    const [sender_address, setSender_address] = useState("");
    const [recipient_address, setRecipient_address] = useState("");
    const [status, setStatus] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await ShipmentApi.get(`/${id}`);
            console.log(response.data.data);
            setSender_id(response.data.data.shipment.sender_id);
            setRecipient_id(response.data.data.shipment.recipient_id);
            setSender_address(response.data.data.shipment.sender_address);
            setRecipient_address(response.data.data.shipment.recipient_address);
            setStatus(response.data.data.shipment.status);
            setContent(response.data.data.shipment.content);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedShipment = await ShipmentApi.put(`/${id}`, {
            sender_id,
            recipient_id,
            sender_address,
            recipient_address,
            status,
            content
        })
        navigate("/menuofshipments");
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/menuofshipments");
    }


    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="sender_id">Sender Company Id</label>
                    <input value={sender_id} onChange={e => setSender_id(e.target.value)} id="sender_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="inventory_id">Recipient Company Id</label>
                    <input value={recipient_id} onChange={e => setRecipient_id(e.target.value)} id="recipient_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="sender_address">Sender Address Id</label>
                    <input value={sender_address} onChange={e => setSender_address(e.target.value)} id="sender_address" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipient_address">Recipient Address Id</label>
                    <input value={recipient_address} onChange={e => setRecipient_address(e.target.value)} id="recipient_address" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Situation Id</label>
                    <input value={status} onChange={e => setStatus(e.target.value)} id="status" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content Info</label>
                    <input value={content} onChange={e => setContent(e.target.value)} id="content" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateShipment