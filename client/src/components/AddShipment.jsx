import React, { useContext } from 'react';
import { useState } from 'react';
import ShipmentApi from '../apis/ShipmentApi';
import { ShipmentContext } from '../context/ShipmentContext';

const AddShipment = () => {
    const { addShipments } = useContext(ShipmentContext);
    const [sender_id, setSender_id] = useState("");
    const [recipient_id, setRecipient_id] = useState("");
    const [sender_address, setSender_address] = useState("");
    const [recipient_address, setRecipient_address] = useState("");
    const [status, setStatus] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await ShipmentApi.post("/", {
                sender_id,
                recipient_id,
                sender_address,
                recipient_address,
                status,
                content
            })
            addShipments(response.data.data.shipment)
            console.log(response)
        } catch (err) {
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input
                            value={sender_id}
                            onChange={e => setSender_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Sender Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={recipient_id}
                            onChange={e => setRecipient_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Recipient Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={sender_address}
                            onChange={e => setSender_address(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Sender Address Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={recipient_address}
                            onChange={e => setRecipient_address(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Recipient Address Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Situation Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Content Info"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddShipment