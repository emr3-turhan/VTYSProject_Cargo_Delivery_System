import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AddressContext } from '../context/AddressContext'
import AddressApi from '../apis/AddressApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


const UpdateAddress = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { addresses } = useContext(AddressContext);
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [town_id, setTown_id] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await AddressApi.get(`/${id}`);
            setName(response.data.data.address.name);
            setTag(response.data.data.address.tag);
            setCompany_id(response.data.data.address.company);
            setCity_id(response.data.data.address.city);
            setTown_id(response.data.data.address.town);
            setAddress(response.data.data.address.address);
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedAddress = await AddressApi.put(`/${id}`, {
            name,
            tag,
            company_id,
            city_id,
            town_id,
            address
        })
        navigate("/menuofaddresses");
    }

    const handleCancel = () => {
        navigate("/menuofaddresses");
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Address Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Address Tag</label>
                    <input value={tag} onChange={e => setTag(e.target.value)} id="tag" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="company_id">Company Name</label>
                    <input value={company_id} onChange={e => setCompany_id(e.target.value)} id="company_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="city_id">City</label>
                    <input value={city_id} onChange={e => setCity_id(e.target.value)} id="city_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="town">Town</label>
                    <input value={town_id} onChange={e => setTown_id(e.target.value)} id="town_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Full Address</label>
                    <input value={address} onChange={e => setAddress(e.target.value)} id="address" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdateAddress