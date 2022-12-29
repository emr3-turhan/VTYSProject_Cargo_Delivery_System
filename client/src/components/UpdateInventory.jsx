import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import InventoryApi from '../apis/InventoryApi';
import { InventoryContext } from '../context/InventoryContext';

const UpdateInventory = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { inventories } = useContext(InventoryContext);
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await InventoryApi.get(`/${id}`);
            console.log(response.data.data);
            setDescription(response.data.data.inventory.desription);
            setWeight(response.data.data.inventory.weight);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedInventory = await InventoryApi.put(`/${id}`, {
            description,
            weight
        });
        navigate("/menuofinventory");
    }



    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/menuofinventory");
    }
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input value={description} onChange={e => setDescription(e.target.value)} id="description" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input value={weight} onChange={e => setWeight(e.target.value)} id="weight" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateInventory