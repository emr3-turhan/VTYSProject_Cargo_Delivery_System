import React, { useEffect } from 'react';
import { useContext } from 'react';
import SituationApi from '../apis/SituationApi';
import { SituationContext } from '../context/SituationContext';
import { useNavigate } from 'react-router-dom';


const SituationList = (props) => {
  const { situations, setSituations } = useContext(SituationContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SituationApi.get("/");
        setSituations(response.data.data.situations);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await SituationApi.delete(`/${id}`);
      setSituations(situations.filter(situation => {
        return situation.situation_id !== id;
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/situations/${id}/update`)
  }

  const handleSituationSelect = (id) => {
    navigate(`/situations/${id}`)
  }

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {situations && situations.map(situation => {
            return (
              <tr onClick={() => handleSituationSelect(situation.situation_id)} key={situation.id}>
                <td>{situation.name}</td>
                <td>{situation.description}</td>
                <td><button onClick={(e) => handleUpdate(e, situation.situation_id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => handleDelete(e, situation.situation_id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </div>
  )
}

export default SituationList