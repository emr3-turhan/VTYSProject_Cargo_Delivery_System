import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import OrderApi from '../apis/OrderApi';
import { OrderContext } from '../context/OrderContext';

const UpdateOrder = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { orders } = useContext(OrderContext);
    const [company_id, setCompany_id] = useState("");
    const [inventory_id, setInventory_id] = useState("");
    const [address_id, setAddress_id] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await OrderApi.get(`/${id}`);
            console.log(response.data.data);
            setCompany_id(response.data.data.order.company);
            setInventory_id(response.data.data.order.item);
            setAddress_id(response.data.data.order.address);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedOrder = await OrderApi.put(`/${id}`, {
            company_id,
            inventory_id,
            address_id
        });
        navigate("/menuoforders");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/menuoforders");
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="company_id">Company Id</label>
                    <input value={company_id} onChange={e => setCompany_id(e.target.value)} id="company_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="inventory_id">Inventory Id</label>
                    <input value={inventory_id} onChange={e => setInventory_id(e.target.value)} id="inventory_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="address_id">Address Id</label>
                    <input value={address_id} onChange={e => setAddress_id(e.target.value)} id="address_id" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )

}

export default UpdateOrder