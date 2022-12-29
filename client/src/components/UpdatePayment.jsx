import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import PaymentApi from '../apis/PaymentApi';
import { PaymentContext } from '../context/PaymentContext';


const UpdatePayment = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const { payments } = useContext(PaymentContext);
    const [order_id, setOrder_id] = useState("");
    const [amount, setAmount] = useState("");
    const [payment_method, setPayment_method] = useState("");
    const [situation_id, setSituation_id] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await PaymentApi.get(`/${id}`);
            console.log(response.data.data.payment);
            setOrder_id(response.data.data.payment.order_name);
            setAmount(response.data.data.payment.amount);
            setPayment_method(response.data.data.payment.payment_method);
            setSituation_id(response.data.data.payment.status);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPayment = await PaymentApi.put(`/${id}`, {
            order_id,
            amount,
            payment_method,
            situation_id
        });
        navigate("/menuofpayments");
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/menuofpayments");
    }


    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="order_id">Order Id</label>
                    <input value={order_id} onChange={e => setOrder_id(e.target.value)} id="order_id" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount Id</label>
                    <input value={amount} onChange={e => setAmount(e.target.value)} id="amount" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="payment_method">Payment Method</label>
                    <input value={payment_method} onChange={e => setPayment_method(e.target.value)} id="payment_method" className="form-control" type="text" />
                </div>
                <button onClick={handleCancel} className="btn btn-danger m-2">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePayment