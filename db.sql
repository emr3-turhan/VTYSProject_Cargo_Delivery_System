
-- TABLES
CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255) NOT NULL,
    notes TEXT NOT NULL
);

CREATE TABLE situations (
    situation_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE cities (
    city_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE towns (
    town_id SERIAL PRIMARY KEY,
    city INTEGER REFERENCES cities(city_id),
    name VARCHAR(255) NOT NULL
);

CREATE TABLE address (
    adress_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tag VARCHAR(255) NOT NULL,
    company INTEGER REFERENCES companies(company_id),
    city INTEGER REFERENCES cities(city_id),
    town INTEGER REFERENCES towns(town_id),
    address VARCHAR(255) NOT NULL
);

CREATE TABLE carriers (
    carrier_id SERIAL PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    power INTEGER NOT NULL,
    capacity INTEGER NOT NULL
);

CREATE TABLE vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    carrier INTEGER REFERENCES carriers(carrier_id),
    status INTEGER REFERENCES situations(situation_id),
    license_plate VARCHAR(255) NOT NULL
);

CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    desription TEXT NOT NULL,
    weight INTEGER NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    company INTEGER REFERENCES companies(company_id),
    item INTEGER REFERENCES inventory(inventory_id),
    address INTEGER REFERENCES address(adress_id)
);

CREATE TABLE drivers (
    driver_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255) NOT NULL,
    auth_vehicle INTEGER REFERENCES vehicles(vehicle_id),
    status INTEGER REFERENCES situations(situation_id),
    balance INTEGER NOT NULL
);

CREATE TABLE shipments (
    shipment_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES companies(company_id),
    recipient_id INTEGER REFERENCES companies(company_id),
    sender_address INTEGER REFERENCES address(adress_id),
    recipient_address INTEGER REFERENCES address(adress_id),
    status INTEGER REFERENCES situations(situation_id),
    content TEXT NOT NULL
);

CREATE TABLE deliveries (
    delivery_id SERIAL PRIMARY KEY,
    shipment INTEGER REFERENCES shipments(shipment_id),
    driver INTEGER REFERENCES drivers(driver_id),
    order_name INTEGER REFERENCES orders(order_id),
    vehicle INTEGER REFERENCES vehicles(vehicle_id),
    status INTEGER REFERENCES situations(situation_id)
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    order_name INTEGER REFERENCES orders(order_id),
    amount INTEGER NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    status INTEGER REFERENCES situations(situation_id)
);

CREATE TABLE comp_payments (
    comp_payment_id SERIAL PRIMARY KEY,
    payment_name INTEGER,
    order_name INTEGER REFERENCES orders(order_id),
    amount INTEGER NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    status INTEGER REFERENCES situations(situation_id)
);

CREATE TABLE comp_deliveries (
    comp_delivery_id SERIAL PRIMARY KEY,
    delivery INTEGER,
    shipment INTEGER REFERENCES shipments(shipment_id),
    driver INTEGER REFERENCES drivers(driver_id),
    order_name INTEGER REFERENCES orders(order_id),
    vehicle INTEGER REFERENCES vehicles(vehicle_id),
    status INTEGER REFERENCES situations(situation_id)
);


-- TRIGGERS
CREATE FUNCTION insert_into_comp_payments()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO comp_payments (payment_name, order_name, amount, payment_method, status)
    VALUES (OLD.payment_id, OLD.order_name, OLD.amount, OLD.payment_method, OLD.status);
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER insert_into_comp_payments_trigger
AFTER DELETE
ON payments
FOR EACH ROW
EXECUTE PROCEDURE insert_into_comp_payments();







CREATE OR REPLACE FUNCTION move_deleted_row_to_comp_deliveries()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO comp_deliveries (delivery, shipment, driver, order_name, vehicle, status)
  VALUES (OLD.delivery_id, OLD.shipment, OLD.driver, OLD.order_name, OLD.vehicle, OLD.status);
  UPDATE comp_deliveries SET comp_delivery_id = (SELECT max(comp_delivery_id)+1 FROM comp_deliveries)
  WHERE comp_delivery_id IS NULL;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER move_deleted_row
AFTER DELETE ON deliveries
FOR EACH ROW EXECUTE PROCEDURE move_deleted_row_to_comp_deliveries();







CREATE OR REPLACE FUNCTION update_vehicle_status() RETURNS TRIGGER AS $$
BEGIN
  UPDATE vehicles SET status = NEW.status WHERE vehicle_id = NEW.auth_vehicle;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_vehicle_status
AFTER INSERT OR UPDATE ON drivers
FOR EACH ROW
EXECUTE PROCEDURE update_vehicle_status();



CREATE OR REPLACE FUNCTION update_shipment_status()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE shipments
  SET status = NEW.status
  WHERE shipment_id = NEW.shipment;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_shipment_status
AFTER INSERT
ON deliveries
FOR EACH ROW
EXECUTE PROCEDURE update_shipment_status();



-- FUNCTIONS
CREATE OR REPLACE FUNCTION count_company() RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM companies);
END;
$$ LANGUAGE plpgsql;




CREATE OR REPLACE FUNCTION count_inventory() RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM inventory);
END;
$$ LANGUAGE plpgsql;






CREATE OR REPLACE FUNCTION count_carrier() RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM carriers);
END;
$$ LANGUAGE plpgsql;





CREATE OR REPLACE FUNCTION count_driver() RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM drivers);
END;
$$ LANGUAGE plpgsql;


