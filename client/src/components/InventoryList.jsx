import React, { useEffect } from 'react';
import { useContext } from 'react';
import InventoryApi from '../apis/InventoryApi';
import { InventoryContext } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';



const InventoryList = (props) => {
  const { inventories, setInventories } = useContext(InventoryContext);
  const { inventoriesCount, setInventoriesCount } = useContext(InventoryContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await InventoryApi.get("/");
        setInventories(response.data.data.inventory);
        const count = await InventoryApi.get("/count");
        setInventoriesCount(count.data.data.counts);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await InventoryApi.delete(`/${id}`);
      setInventories(inventories.filter(inventory => {
        return inventory.inventory_id !== id;
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/inventory/${id}/update`)
  }

  const handleInventorySelect = (id) => {
    navigate(`/inventory/${id}`)
  }
  return (
    <div className='list-group'>
      {inventoriesCount && inventoriesCount.map(count => {
        return (
          <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">Inventory Count</h4>
            <p>There are {count.count_inventory} inventories in the database.</p>
          </div>
        )
      })}
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Description</th>
            <th scope="col">Weight</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {inventories && inventories.map(inventory => {
            return (
              <tr onClick={() => handleInventorySelect(inventory.inventory_id)} key={inventory.id}>
                <td>{inventory.desription}</td>
                <td>{inventory.weight}</td>
                <td><button onClick={(e) => handleUpdate(e, inventory.inventory_id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => handleDelete(e, inventory.inventory_id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryList