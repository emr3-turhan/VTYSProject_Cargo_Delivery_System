import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CarrierContext } from '../context/CarrierContext';
import CarrierApi from '../apis/CarrierApi';
import { useNavigate } from 'react-router-dom';

const CarrierList = (props) => {
  const { carriers, setCarriers } = useContext(CarrierContext);
  const { carriersCount, setCarriersCount } = useContext(CarrierContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CarrierApi.get("/");
        setCarriers(response.data.data.carriers);
        const count = await CarrierApi.get("/count");
        setCarriersCount(count.data.data.counts);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await CarrierApi.delete(`/${id}`);
      setCarriers(carriers.filter(carrier => {
        return carrier.carrier_id !== id;
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/carriers/${id}/update`)
  }

  const handleCarrierSelect = (id) => {
    navigate(`/carriers/${id}`)
  }

  return (
    <div className='list-group'>
      {carriersCount && carriersCount.map(count => {

        return (
          <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">Carriers Count</h4>
            <p>There are {count.count_carrier} carriers in the database.</p>
          </div>
        )
      })}
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Power</th>
            <th scope="col">Capacity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {carriers && carriers.map(carrier => {
            return (
              <tr onClick={() => handleCarrierSelect(carrier.carrier_id)} key={carrier.id}>
                <td>{carrier.brand}</td>
                <td>{carrier.model}</td>
                <td>{carrier.year}</td>
                <td>{carrier.power}</td>
                <td>{carrier.capacity}</td>
                <td><button onClick={(e) => handleUpdate(e, carrier.carrier_id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => handleDelete(e, carrier.carrier_id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </div>
  )
}

export default CarrierList