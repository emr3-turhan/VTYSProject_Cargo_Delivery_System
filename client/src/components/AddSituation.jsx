import React, { useContext } from 'react';
import { useState } from 'react';
import SituationApi from '../apis/SituationApi';
import { SituationContext } from '../context/SituationContext';

const AddSituation = () => {
    const { addSituations } = useContext(SituationContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await SituationApi.post("/", {
                name,
                description
            })
            addSituations(response.data.data.situation)
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="description"
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

export default AddSituation