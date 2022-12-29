import React, { useEffect } from 'react'
import { useContext } from 'react'
import PaymentApi from '../apis/PaymentApi'
import { PaymentContext } from '../context/PaymentContext'
import { useNavigate } from 'react-router-dom'


const PaymentList = (props) => {
    const { payments, setPayments } = useContext(PaymentContext);
    const { companiesCount, setCompaniesCount } = useContext(PaymentContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PaymentApi.get("/");
                setPayments(response.data.data.payments);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await PaymentApi.delete(`/${id}`);
            setPayments(payments.filter(payment => {
                return payment.payment_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/payments/${id}/update`)
    }

    const handlePaymentSelect = (id) => {
        navigate(`/payments/${id}`)
    }



    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Order Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {payments && payments.map(payment => {
                        return (
                            <tr onClick={() => handlePaymentSelect(payment.payment_id)} key={payment.payment_id}>
                                <td>{payment.order_name}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.payment_method}</td>
                                <td>{payment.situation_name}</td>
                                <td><button onClick={(e) => handleUpdate(e, payment.payment_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, payment.payment_id)} className="btn btn-success ">Pay</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PaymentList