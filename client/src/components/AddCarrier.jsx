import React, { useContext } from 'react'
import { useState } from 'react';
import CarrierApi from '../apis/CarrierApi';
import { CarrierContext } from '../context/CarrierContext';

const AddCarrier = () => {
  const { addCarriers } = useContext(CarrierContext);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [power, setPower] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await CarrierApi.post("/", {
        brand,
        model,
        year,
        power,
        capacity
      })
      addCarriers(response.data.data.carrier)
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
              value={brand}
              onChange={e => setBrand(e.target.value)}
              type="text"
              className="form-control"
              placeholder="brand"
            />
          </div>
          <div className="col">
            <input
              value={model}
              onChange={e => setModel(e.target.value)}
              className="form-control"
              type="text"
              placeholder="model"
            />
          </div>
          <div className="col">
            <input
              value={year}
              onChange={e => setYear(e.target.value)}
              className="form-control"
              type="text"
              placeholder="year"
            />
          </div>
          <div className="col">
            <input
              value={power}
              onChange={e => setPower(e.target.value)}
              className="form-control"
              type="text"
              placeholder="power"
            />
          </div>
          <div className="col">
            <input
              value={capacity}
              onChange={e => setCapacity(e.target.value)}
              className="form-control"
              type="text"
              placeholder="capacity"
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

export default AddCarrier