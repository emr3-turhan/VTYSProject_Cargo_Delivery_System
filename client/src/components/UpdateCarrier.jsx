import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CarrierApi from '../apis/CarrierApi';
import { CarrierContext } from '../context/CarrierContext';

const UpdateCarrier = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { carriers } = useContext(CarrierContext);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [power, setPower] = useState("");
    const [capacity, setCapacity] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await CarrierApi.get(`/${id}`);
            console.log(response.data.data);
            setBrand(response.data.data.carrier.brand);
            setModel(response.data.data.carrier.model);
            setYear(response.data.data.carrier.year);
            setPower(response.data.data.carrier.power);
            setCapacity(response.data.data.carrier.capacity);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCarrier = await CarrierApi.put(`/${id}`, {
            brand,
            model,
            year,
            power,
            capacity
        })
        navigate(`/menuofcarriers`);
    }

    const handleCancel = () => {
        navigate("/menuofcarriers");
    }



    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input value={brand} onChange={e => setBrand(e.target.value)} id="brand" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input value={model} onChange={e => setModel(e.target.value)} id="model" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input value={year} onChange={e => setYear(e.target.value)} id="year" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="power">Power</label>
                    <input value={power} onChange={e => setPower(e.target.value)} id="power" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <input value={capacity} onChange={e => setCapacity(e.target.value)} id="capacity" className="form-control" type="text" />
                </div>

                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCarrier