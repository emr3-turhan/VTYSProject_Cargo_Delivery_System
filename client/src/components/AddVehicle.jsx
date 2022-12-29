import React, { useContext } from 'react';
import { useState } from 'react';
import VehicleApi from '../apis/Vehicle.Api';
import { VehicleContext } from '../context/VehicleContext';

const AddVehicle = () => {
    const { addVehicles } = useContext(VehicleContext);
    const [carrier_id, setCarrier_id] = useState("");
    const [situation_id, setSituation_id] = useState("");
    const [license_plate, setLicence_plate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await VehicleApi.post("/", {
                carrier_id,
                situation_id,
                license_plate
            })
            addVehicles(response.data.data.vehicle)
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
                            value={carrier_id}
                            onChange={e => setCarrier_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Carrier Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={situation_id}
                            onChange={e => setSituation_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Situation Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={license_plate}
                            onChange={e => setLicence_plate(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="License Plate"
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

export default AddVehicle