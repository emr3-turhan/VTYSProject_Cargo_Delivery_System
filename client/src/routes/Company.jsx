import React from 'react';
import AddCompany from '../components/AddCompany';
import CompanyHeader from '../components/CompanyHeader';
import CompanyList from '../components/CompanyList';

const Company = () => {
    return (<div>
        <CompanyHeader />
        <AddCompany />
        <CompanyList />
    </div>
    )
}

export default Company