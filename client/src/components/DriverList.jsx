import React, { useEffect, useContext } from 'react'
import { DriverContext } from '../context/DriverContext'
import DriverApi from '../apis/DriverApi'
import { useNavigate } from 'react-router-dom'

const DriverList = (props) => {
    const { drivers, setDrivers } = useContext(DriverContext)
    const { driversCount, setDriversCount } = useContext(DriverContext)
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DriverApi.get("/")
                setDrivers(response.data.data.drivers)
                const count = await DriverApi.get("/count")
                setDriversCount(count.data.data.counts)
            } catch (err) {

            }
        }
        fetchData()
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await DriverApi.delete(`/${id}`)
            setDrivers(drivers.filter(driver => {
                return driver.driver_id !== id
            }))
        } catch (err) {

        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation()
        navigate(`/drivers/${id}/update`)
    }

    const handleDriverSelect = (id) => {
        navigate(`/drivers/${id}`)
    }

    return (
        <div className='list-group'>
            {driversCount && driversCount.map(count => {
                return (
                    <div className="alert alert-primary" role="alert">
                        <h4 className="alert-heading">Drivers Count</h4>
                        <p>There are {count.count_driver} drivers in the database.</p>
                    </div>
                )
            })}
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Contact Info</th>
                        <th scope="col">Used Vehicle Brand</th>
                        <th scope="col">Used Vehicle Model</th>
                        <th scope="col">Status</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers && drivers.map(driver => {
                        return (
                            <tr onClick={() => handleDriverSelect(driver.driver_id)} key={driver.id}>
                                <td>{driver.first_name}</td>
                                <td>{driver.last_name}</td>
                                <td>{driver.contact_info}</td>
                                <td>{driver.brand}</td>
                                <td>{driver.model}</td>
                                <td>{driver.name}</td>
                                <td>{driver.balance}</td>
                                <td><button onClick={(e) => handleUpdate(e, driver.driver_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, driver.driver_id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DriverList