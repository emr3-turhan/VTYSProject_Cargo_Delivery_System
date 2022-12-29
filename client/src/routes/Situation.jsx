import React from 'react'
import SituationHeader from '../components/SituationHeader'
import AddSituation from '../components/AddSituation'
import SituationList from '../components/SituationList'


const Situation = () => {
    return (<div>
        <SituationHeader />
        <AddSituation />
        <SituationList />
    </div>
    )
}

export default Situation