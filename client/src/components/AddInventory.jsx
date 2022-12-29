import React, { useContext } from 'react';
import { useState } from 'react';
import InventoryApi from '../apis/InventoryApi';
import { InventoryContext } from '../context/InventoryContext';



const AddInventory = () => {
    const { addInventories } = useContext(InventoryContext);
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await InventoryApi.post("/", {
                description,
                weight
            })
            addInventories(response.data.data.inventory)
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="description"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="weight"
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
    );
}

export default AddInventory