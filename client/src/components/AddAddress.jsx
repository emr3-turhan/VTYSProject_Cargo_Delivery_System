import React, { useContext } from 'react';
import { useState } from 'react';
import AddressApi from '../apis/AddressApi';
import { AddressContext } from '../context/AddressContext';

const AddAddress = () => {
    const { addAddresses } = useContext(AddressContext);
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [town_id, setTown_id] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await AddressApi.post("/", {
                name,
                tag,
                company_id,
                city_id,
                town_id,
                address
            })
            addAddresses(response.data.data.address)
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
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="name"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={tag}
                            onChange={e => setTag(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="tag"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={company_id}
                            onChange={e => setCompany_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Company Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={city_id}
                            onChange={e => setCity_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="City Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={town_id}
                            onChange={e => setTown_id(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Town Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Full Address"
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

export default AddAddress