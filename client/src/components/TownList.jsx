import React from 'react'
import { useContext } from 'react';
import { TownContext } from '../context/TownContext';
import TownApi from '../apis/TownApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const TownList = (props) => {
    const { towns, setTowns } = useContext(TownContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TownApi.get("/");
                setTowns(response.data.data.towns);
            } catch (err) {
            }
        }
        fetchData();
    }, []);


    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await TownApi.delete(`/${id}`);
            setTowns(towns.filter(town => {
                return town.town_id !== id;
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/towns/${id}/update`)
    }

    const handleTownSelect = (id) => {
        navigate(`/towns/${id}`)
    }


    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">City Name</th>
                        <th scope="col">Town Name</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {towns && towns.map(town => {
                        return (
                            <tr onClick={() => handleTownSelect(town.town_id)} key={town.id}>
                                <td>{town.city_name}</td>
                                <td>{town.town_name}</td>
                                <td><button onClick={(e) => handleUpdate(e, town.town_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, town.town_id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TownList