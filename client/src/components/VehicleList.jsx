import React, { useEffect } from 'react';
import { useContext } from 'react';
import VehicleApi from '../apis/Vehicle.Api';
import { VehicleContext } from '../context/VehicleContext';
import { useNavigate } from 'react-router-dom';


const VehicleList = (props) => {
    const { vehicles, setVehicles } = useContext(VehicleContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await VehicleApi.get("/");
                setVehicles(response.data.data.vehicles);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await VehicleApi.delete(`/${id}`);
            setVehicles(vehicles.filter(vehicle => {
                return vehicle.vehicle_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/vehicles/${id}/update`)
    }

    const handleVehicleSelect = (id) => {
        navigate(`/vehicles/${id}`)
    }

    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">License Plate</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles && vehicles.map(vehicle => {
                        return (
                            <tr onClick={() => handleVehicleSelect(vehicle.vehicle_id)} key={vehicle.vehicle_id}>
                                <td>{vehicle.brand}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.license_plate}</td>
                                <td>{vehicle.status}</td>
                                <td><button onClick={(e) => handleUpdate(e, vehicle.vehicle_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, vehicle.vehicle_id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleList