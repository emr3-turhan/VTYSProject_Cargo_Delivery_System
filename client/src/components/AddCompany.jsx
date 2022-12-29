import React, { useContext } from 'react';
import { useState } from 'react';
import CompanyApi from '../apis/CompanyApi';
import { CompanyContext } from '../context/CompanyContext';

const AddCompany = () => {
    const { addCompanies } = useContext(CompanyContext);
    const [name, setName] = useState("");
    const [contact_info, setContact_info] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await CompanyApi.post("/", {
                name,
                contact_info,
                notes
            })
            addCompanies(response.data.data.company)
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
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="name"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={contact_info}
                            onChange={e => setContact_info(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="info"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="note"
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

export default AddCompany


// import React from 'react';

// const AddCompany = () => {
//     return (
//         <div className='mb-4'>
//             <form action=''>
//                 <div className='form-row'>
//                     <div className='col'>
//                         <input type='text' className='form-control' placeholder='name' />
//                     </div>
//                     <div className='col'>
//                         <input type='text' className='form-control' placeholder='contact_info' />
//                     </div>
//                     <div className='col'>
//                         <input type='text' className='form-control' placeholder='notes' />
//                     </div>
//                 </div>
//             </form>
//         </div>

//     )
// }

// export default AddCompany