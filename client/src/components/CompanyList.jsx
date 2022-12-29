import React, { useEffect } from 'react';
import { useContext } from 'react';
import CompanyApi from '../apis/CompanyApi';
import { CompanyContext } from '../context/CompanyContext';
import { useNavigate } from 'react-router-dom';

const CompanyList = (props) => {
  const { companies, setCompanies } = useContext(CompanyContext);
  const { companiesCount, setCompaniesCount } = useContext(CompanyContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CompanyApi.get("/");
        setCompanies(response.data.data.companies);
        const count = await CompanyApi.get("/count");
        setCompaniesCount(count.data.data.counts);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await CompanyApi.delete(`/${id}`);
      setCompanies(companies.filter(company => {
        return company.company_id !== id;
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/companies/${id}/update`)
  }

  const handleCompanySelect = (id) => {
    navigate(`/companies/${id}`)
  }

  return (
    <div className='list-group'>
      {companiesCount && companiesCount.map(count => {
        return (
          <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">Companies Count</h4>
            <p>There are {count.count_company} companies in the database.</p>
          </div>
        )
      })}
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Name</th>
            <th scope="col">Contact Info</th>
            <th scope="col">Notes</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {companies && companies.map(company => {
            return (
              <tr onClick={() => handleCompanySelect(company.company_id)} key={company.id}>
                <td>{company.name}</td>
                <td>{company.contact_info}</td>
                <td>{company.notes}</td>
                <td><button onClick={(e) => handleUpdate(e, company.company_id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => handleDelete(e, company.company_id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyList