import React, { useEffect } from 'react'
import { useContext } from 'react';
import AddressApi from '../apis/AddressApi';
import { AddressContext } from '../context/AddressContext';
import { useNavigate } from 'react-router-dom';

const AddressList = (props) => {
    const { addresses, setAddresses } = useContext(AddressContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AddressApi.get("/");
                setAddresses(response.data.data.address);
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await AddressApi.delete(`/${id}`);
            setAddresses(addresses.filter(address => {
                return address.address_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/addresses/${id}/update`)
    }

    const handleAddressSelect = (id) => {
        navigate(`/addresses/${id}`)
    }

    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Address Name</th>
                        <th scope="col">Address Tag</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Town</th>
                        <th scope="col">Full Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {addresses && addresses.map(address => {
                        return (
                            <tr onClick={() => handleAddressSelect(address.adress_id)} key={address.id}>
                                <td>{address.name}</td>
                                <td>{address.tag}</td>
                                <td>{address.company_name}</td>
                                <td>{address.city_name}</td>
                                <td>{address.town_name}</td>
                                <td>{address.address}</td>
                                <td><button onClick={(e) => handleUpdate(e, address.adress_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, address.adress_id)} className="btn btn-danger">Delete</button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )




}

export default AddressList;