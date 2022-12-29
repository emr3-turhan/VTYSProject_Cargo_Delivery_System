import React, { useContext } from 'react'
import { useState } from 'react'
import OrderApi from '../apis/OrderApi'
import { OrderContext } from '../context/OrderContext'


const AddOrder = () => {
    const { addOrders } = useContext(OrderContext)
    const [company_id, setCompany_id] = useState("")
    const [item_id, setItem_id] = useState("")
    const [address_id, setAddress_id] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await OrderApi.post("/", {
                company_id,
                item_id,
                address_id
            })
            addOrders(response.data.data.order)
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
                            value={company_id}
                            onChange={e => setCompany_id(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Company Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={item_id}
                            onChange={e => setItem_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Item Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={address_id}
                            onChange={e => setAddress_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Address Id"
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

export default AddOrder