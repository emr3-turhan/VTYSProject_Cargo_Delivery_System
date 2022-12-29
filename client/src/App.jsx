import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { CompaniesContextProvider } from './context/CompanyContext';
import { CarriersContextProvider } from './context/CarrierContext';
import { InventoryContextProvider } from './context/InventoryContext';
import { SituationsContextProvider } from './context/SituationContext';
import Carrier from './routes/Carrier';
import CarrierDetailPage from './routes/CarrierDetailPage';
import CarrierUpdatePage from './routes/CarrierUpdatePage';
import Company from './routes/Company';
import CompanyDetailPage from './routes/CompanyDetailPage';
import CompanyUpdatePage from './routes/CompanyUpdatePage';
import Home from './routes/Home';
import Inventory from './routes/Inventory';
import InventoryDetailPage from './routes/InventoryDetailPage';
import InventoryUpdatePage from './routes/InventoryUpdatePage';
import Situation from './routes/Situation';
import SituationDetailPage from './routes/SituationDetailPage';
import SituationUpdatePage from './routes/SituationUpdatePage';
import { TownsContextProvider } from './context/TownContext';
import Towns from './routes/Town';
import TownDetailPage from './routes/TownDetailPage';
import TownUpdatePage from './routes/TownUpdatePage';
import { AddressesContextProvider } from './context/AddressContext';
import Address from './routes/Address';
import AddressDetailPage from './routes/AddressDetailPage';
import AddressUpdatePage from './routes/AddressUpdatePage';
import { VehiclesContextProvider } from './context/VehicleContext';
import Vehicle from './routes/Vehicle';
import VehicleDetailPage from './routes/VehicleDetailPage';
import VehicleUpdatePage from './routes/VehicleUpdatePage';
import { DriversContextProvider } from './context/DriverContext';
import Driver from './routes/Driver';
import DriverDetailPage from './routes/DriverDetailPage';
import DriverUpdatePage from './routes/DriverUpdatePage';
import { OrdersContextProvider } from './context/OrderContext';
import Order from './routes/Order';
import OrderDetailPage from './routes/OrderDetailPage';
import OrderUpdatePage from './routes/OrderUpdatePage';
import { PaymentsContextProvider } from './context/PaymentContext';
import Payment from './routes/Payment';
import PaymentDetailPage from './routes/PaymentDetailPage';
import PaymentUpdatePage from './routes/PaymentUpdatePage';
import { ShipmentsContextProvider } from './context/ShipmentContext';
import Shipment from './routes/Shipment';
import ShipmentDetailPage from './routes/ShipmentDetailPage';
import ShipmentUpdatePage from './routes/ShipmentUpdatePage';
import { DeliveriesContextProvider } from './context/DeliveryContext';
import Delivery from './routes/Delivery';
import DeliveryDetailPage from './routes/DeliveryDetailPage';
import DeliveryUpdatePage from './routes/DeliveryUpdatePage';



const App = () => {

    return (
        <div className='container'>

            <Router>
                <Switch>
                    <Route exact path="/" element={<Home />} />
                </Switch>
            </Router>

            <CompaniesContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofcompanies" element={<Company />} />
                        <Route exact path="/companies/:id/update" element={<CompanyUpdatePage />} />
                        <Route exact path="/companies/:id" element={<CompanyDetailPage />} />
                    </Switch>
                </Router>
            </CompaniesContextProvider>

            <CarriersContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofcarriers" element={<Carrier />} />
                        <Route exact path="/carriers/:id/update" element={<CarrierUpdatePage />} />
                        <Route exact path="/carriers/:id" element={<CarrierDetailPage />} />
                    </Switch>
                </Router>
            </CarriersContextProvider>

            <InventoryContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofinventory" element={<Inventory />} />
                        <Route exact path="/inventory/:id/update" element={<InventoryUpdatePage />} />
                        <Route exact path="/inventory/:id" element={<InventoryDetailPage />} />
                    </Switch>
                </Router>
            </InventoryContextProvider>

            <SituationsContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofsituations" element={<Situation />} />
                        <Route exact path="/situations/:id/update" element={<SituationUpdatePage />} />
                        <Route exact path="/situations/:id" element={<SituationDetailPage />} />
                    </Switch>
                </Router>
            </SituationsContextProvider>

            <TownsContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuoftowns" element={<Towns />} />
                        <Route exact path="/towns/:id/update" element={<TownUpdatePage />} />
                        <Route exact path="/towns/:id" element={<TownDetailPage />} />
                    </Switch>
                </Router>
            </TownsContextProvider>

            <AddressesContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofaddresses" element={<Address />} />
                        <Route exact path="/addresses/:id/update" element={<AddressUpdatePage />} />
                        <Route exact path="/addresses/:id" element={<AddressDetailPage />} />
                    </Switch>
                </Router>
            </AddressesContextProvider>

            <VehiclesContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofvehicles" element={<Vehicle />} />
                        <Route exact path="/vehicles/:id/update" element={<VehicleUpdatePage />} />
                        <Route exact path="/vehicles/:id" element={<VehicleDetailPage />} />
                    </Switch>
                </Router>
            </VehiclesContextProvider>

            <DriversContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofdrivers" element={<Driver />} />
                        <Route exact path="/drivers/:id/update" element={<DriverUpdatePage />} />
                        <Route exact path="/drivers/:id" element={<DriverDetailPage />} />
                    </Switch>
                </Router>

            </DriversContextProvider>

            <OrdersContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuoforders" element={<Order />} />
                        <Route exact path="/orders/:id/update" element={<OrderUpdatePage />} />
                        <Route exact path="/orders/:id" element={<OrderDetailPage />} />
                    </Switch>
                </Router>
            </OrdersContextProvider>

            <PaymentsContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofpayments" element={<Payment />} />
                        <Route exact path="/payments/:id/update" element={<PaymentUpdatePage />} />
                        <Route exact path="/payments/:id" element={<PaymentDetailPage />} />
                    </Switch>
                </Router>
            </PaymentsContextProvider>

            <ShipmentsContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofshipments" element={<Shipment />} />
                        <Route exact path="/shipments/:id/update" element={<ShipmentUpdatePage />} />
                        <Route exact path="/shipments/:id" element={<ShipmentDetailPage />} />
                    </Switch>
                </Router>
            </ShipmentsContextProvider>

            <DeliveriesContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/menuofdeliveries" element={<Delivery />} />
                        <Route exact path="/deliveries/:id/update" element={<DeliveryUpdatePage />} />
                        <Route exact path="/deliveries/:id" element={<DeliveryDetailPage />} />
                    </Switch>
                </Router>
            </DeliveriesContextProvider>

        </div>)
}

export default App;