import React, { useState, createContext } from 'react';

export const CompanyContext = createContext();

export const CompaniesContextProvider = (props) => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companiesCount, setCompaniesCount] = useState(null);

    const addCompanies = (company) => {
        setCompanies([...companies, company]);
    }


    return (
        <CompanyContext.Provider value={{ companies, setCompanies, addCompanies, selectedCompany, setSelectedCompany, companiesCount, setCompaniesCount }}>
            {props.children}
        </CompanyContext.Provider>
    )
}