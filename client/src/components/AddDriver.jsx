import React, { useContext, useState } from 'react';
import DriverApi from '../apis/DriverApi';
import { DriverContext } from '../context/DriverContext';

const AddDriver = () => {
    const { addDrivers } = useContext(DriverContext);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [contact_info, setContact_info] = useState("");
    const [auth_vehicle_id, setAuth_vehicle_id] = useState("");
    const [situation_id, setSituation_id] = useState("");
    const [balance, setBalance] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await DriverApi.post("/", {
                first_name,
                last_name,
                contact_info,
                auth_vehicle_id,
                situation_id,
                balance
            })
            addDrivers(response.data.data.driver)
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
                            value={first_name}
                            onChange={e => setFirst_name(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={last_name}
                            onChange={e => setLast_name(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={contact_info}
                            onChange={e => setContact_info(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Contact Info"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={auth_vehicle_id}
                            onChange={e => setAuth_vehicle_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Vehicle Id"
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
                    <div className="col">
                        <input
                            value={balance}
                            onChange={e => setBalance(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Balance"
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

export default AddDriver


// first_name
// last_name
// contact_info
// auth_vehicle_id
// situation_id
// balance