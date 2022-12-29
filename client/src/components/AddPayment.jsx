import React, { useContext } from 'react';
import { useState } from 'react';
import PaymentApi from '../apis/PaymentApi';
import { PaymentContext } from '../context/PaymentContext';

const AddPayment = () => {
    const { addPayments } = useContext(PaymentContext);
    const [order_id, setOrder_id] = useState("");
    const [amount, setAmount] = useState("");
    const [payment_method, setPayment_method] = useState("");
    const [situation_id, setSituation_id] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await PaymentApi.post("/", {
                order_id,
                amount,
                payment_method,
                situation_id
            })
            addPayments(response.data.data.payment)
            console.log(response)
        } catch (err) {
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input
                            value={order_id}
                            onChange={e => setOrder_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Order Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Amount"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={payment_method}
                            onChange={e => setPayment_method(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Payment Method"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={situation_id}
                            onChange={e => setSituation_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Situation Id"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddPayment