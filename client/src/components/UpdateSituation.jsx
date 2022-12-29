import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import SituationApi from '../apis/SituationApi';
import { SituationContext } from '../context/SituationContext';

const UpdateSituation = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { situations } = useContext(SituationContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await SituationApi.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.situation.name);
            setDescription(response.data.data.situation.description);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedSituation = await SituationApi.put(`/${id}`, {
            name,
            description
        })
        navigate("/menuofsituations");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/menuofsituations")
    }
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input value={description} onChange={e => setDescription(e.target.value)} id="description" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateSituation