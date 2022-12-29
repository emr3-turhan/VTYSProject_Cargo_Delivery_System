import React, { useContext, useState, useEffect } from 'react';
import { DriverContext } from '../context/DriverContext';
import DriverApi from '../apis/DriverApi';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateDriver = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { drivers } = useContext(DriverContext);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [contact_info, setContact_info] = useState("");
    const [vehicle_id, setVehicle_id] = useState("");
    const [situation_id, setSituation_id] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await DriverApi.get(`/${id}`);
            setFirst_name(response.data.data.driver.first_name);
            setLast_name(response.data.data.driver.last_name);
            setContact_info(response.data.data.driver.contact_info);
            setVehicle_id(response.data.data.driver.auth_vehicle);
            setSituation_id(response.data.data.driver.status);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedDriver = await DriverApi.put(`/${id}`, {
            first_name,
            last_name,
            contact_info,
            vehicle_id,
            situation_id
        });
        navigate("/menuofdrivers");
    };

    const handleCancel = () => {
        navigate("/menuofdrivers");
    };


    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input value={first_name} onChange={e => setFirst_name(e.target.value)} id="first_name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input value={last_name} onChange={e => setLast_name(e.target.value)} id="last_name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact_info">Contact Info</label>
                    <input value={contact_info} onChange={e => setContact_info(e.target.value)} id="contact_info" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle_id">Used Vehicle Id</label>
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

export default UpdateDriver