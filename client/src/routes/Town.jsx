import React from 'react'
import AddTown from '../components/AddTown';
import TownHeader from '../components/TownHeader';
import TownList from '../components/TownList';

const Town = () => {
    return (
        <div>
            <TownHeader />
            <AddTown />
            <TownList />
        </div>
    )
}

export default Town