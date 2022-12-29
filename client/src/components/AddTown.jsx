import React, { useContext } from 'react';
import { useState } from 'react';
import TownApi from '../apis/TownApi';
import { TownContext } from '../context/TownContext';

const AddTown = () => {
    const { addTowns } = useContext(TownContext);
    const [city_id, setCityId] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await TownApi.post("/", {
                city_id,
                name
            })
            addTowns(response.data.data.town)
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
                            value={city_id}
                            onChange={e => setCityId(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="City Id"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="name"
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

export default AddTown