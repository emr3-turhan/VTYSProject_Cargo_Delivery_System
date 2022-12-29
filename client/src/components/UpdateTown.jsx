import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TownApi from '../apis/TownApi'
import { TownContext } from '../context/TownContext'

const UpdateTown = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { towns } = useContext(TownContext);
    const [city_id, setCity_id] = useState("");
    const [town_name, setTown_name] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await TownApi.get(`/${id}`);
            setCity_id(response.data.data.town.city);
            setTown_name(response.data.data.town.name);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTown = await TownApi.put(`/${id}`, {
            city_id,
            name: town_name
        })
        navigate(`/menuoftowns`);
    }

    const handleCancel = () => {
        navigate("/menuoftowns");
    }


    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="city_id">City Id</label>
                    <input value={city_id} onChange={e => setCity_id(e.target.value)} id="city_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Town Name</label>
                    <input value={town_name} onChange={e => setTown_name(e.target.value)} id="name" className="form-control" type="text" />
                </div>

                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateTown