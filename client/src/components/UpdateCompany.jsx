import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CompanyApi from '../apis/CompanyApi';
import { CompanyContext } from '../context/CompanyContext';


const UpdateCompany = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { companies } = useContext(CompanyContext);
    const [name, setName] = useState("");
    const [contact_info, setContact_info] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await CompanyApi.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.company.name);
            setContact_info(response.data.data.company.contact_info);
            setNotes(response.data.data.company.notes);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCompany = await CompanyApi.put(`/${id}`, {
            name,
            contact_info,
            notes
        })
        navigate(`/menuofcompanies`);
    }

    const handleCancel = () => {

        navigate("/menuofcompanies")
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact_info">Contact Info</label>
                    <input value={contact_info} onChange={e => setContact_info(e.target.value)} id="contact_info" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input value={notes} onChange={e => setNotes(e.target.value)} id="notes" className="form-control" type="text" />
                </div>

                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCompany