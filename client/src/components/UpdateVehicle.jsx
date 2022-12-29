import React from 'react'
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VehicleApi from '../apis/Vehicle.Api';
import { VehicleContext } from '../context/VehicleContext';

const UpdateVehicle = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { vehicles } = useContext(VehicleContext);
    const [carrier_id, setCarrier_id] = useState("");
    const [situation_id, setSituation_id] = useState("");
    const [license_plate, setLicence_plate] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await VehicleApi.get(`/${id}`);
            console.log(response.data.data);
            setCarrier_id(response.data.data.vehicle.carrier);
            setSituation_id(response.data.data.vehicle.status);
            setLicence_plate(response.data.data.vehicle.license_plate);

        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedVehicle = await VehicleApi.put(`/${id}`, {
            carrier_id,
            situation_id,
            license_plate
        })
        navigate("/menuofvehicles");
    }

    const handleCancel = () => {
        navigate("/menuofvehicles");
    }
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="carrier_id">Carrier Id</label>
                    <input value={carrier_id} onChange={e => setCarrier_id(e.target.value)} id="carrier_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="situation_id">Situation Id</label>
                    <input value={situation_id} onChange={e => setSituation_id(e.target.value)} id="situation_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="license_plate">License Plate</label>
                    <input value={license_plate} onChange={e => setLicence_plate(e.target.value)} id="license_plate" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateVehicle