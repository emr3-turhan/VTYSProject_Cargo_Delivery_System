import React from 'react'
import MainMenuHeader from '../components/MainMenuHeader'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (<div className='container'>
        <MainMenuHeader />
        <Link to="/menuofcompanies">
            <Button variant="primary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Companies
            </Button>
        </Link>
        <Link to="/menuofinventory">
            <Button variant="primary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Inventory
            </Button>
        </Link>
        <Link to="/menuofcarriers">
            <Button variant="dark" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Carriers
            </Button>
        </Link>
        <Link to="/menuofvehicles">
            <Button variant="light" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Vehicles
            </Button>
        </Link>
        <Link to="/menuofdrivers">
            <Button variant="info" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Drivers
            </Button>
        </Link>

        <Link to="/menuoftowns">
            <Button variant="danger" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Towns
            </Button>
        </Link>

        <Link to="/menuofaddresses">
            <Button variant="warning" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Addresses
            </Button>
        </Link>

        <Link to="/menuoforders">
            <Button variant="primary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Orders
            </Button>
        </Link>


        <Link to="/menuofpayments">
            <Button variant="primary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Payments
            </Button>
        </Link>


        <Link to="/menuofshipments">
            <Button variant="secondary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Shipments
            </Button>
        </Link>
        <Link to="/menuofdeliveries">
            <Button variant="primary" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Deliveries
            </Button>
        </Link>



        <Link to="/menuofsituations">
            <Button variant="success" size="lg" className='btn btn-primary btn-rounded  btn-block m-3'>
                Situations
            </Button>
        </Link>


    </div>
    )
}

export default Home