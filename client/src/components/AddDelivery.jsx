import React, { useContext, useState } from 'react'
import DeliveryApi from '../apis/DeliveryApi'
import { DeliveryContext } from '../context/DeliveryContext'

const AddDelivery = () => {
    const { addDeliveries } = useContext(DeliveryContext)
    const [shipment_id, setShipment_id] = useState("")
    const [driver_id, setDriver_id] = useState("")
    const [order_id, setOrder_id] = useState("")
    const [vehicle_id, setVehicle_id] = useState("")
    const [situation_id, setSituation_id] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await DeliveryApi.post("/", {
                shipment_id,
                driver_id,
                order_id,
                vehicle_id,
                situation_id
            })
            addDeliveries(response.data.data.delivery)
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
                            value={shipment_id}
                            onChange={e => setShipment_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Shipment Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={driver_id}
                            onChange={e => setDriver_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Driver Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={order_id}
                            onChange={e => setOrder_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Order Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={vehicle_id}
                            onChange={e => setVehicle_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Vehicle Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={situation_id}
                            onChange={e => setSituation_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Situation Id"
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

export default AddDelivery