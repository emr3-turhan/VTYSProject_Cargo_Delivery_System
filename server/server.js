require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
// Get All Companies

app.get("/api/v1/companies", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM companies");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                companies: results.rows,

            },


        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Companies Count
app.get("/api/v1/companies/count", async (req, res) => {

    try {
        const results = await db.query("SELECT count_company();");


        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                counts: results.rows,

            },


        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Company
app.get("/api/v1/companies/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM companies WHERE company_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                company: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Company
app.post("/api/v1/companies", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO companies (name, contact_info, notes) VALUES ($1, $2, $3) returning *", [req.body.name, req.body.contact_info, req.body.notes]);


        res.status(201).json({
            status: "success",
            data: {
                company: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Company

app.put("/api/v1/companies/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE companies SET name = $1, contact_info = $2, notes = $3 WHERE company_id = $4 returning *",
            [req.body.name, req.body.contact_info, req.body.notes, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                company: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Company
app.delete("/api/v1/companies/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM companies WHERE company_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

// ==========================================================================

// Get All Situations

app.get("/api/v1/situations", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM situations");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                situations: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Situation
app.get("/api/v1/situations/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM situations WHERE situation_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                situation: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Situation
app.post("/api/v1/situations", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO situations (name, description) VALUES ($1, $2) returning *", [req.body.name, req.body.description]);


        res.status(201).json({
            status: "success",
            data: {
                situation: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Situation

app.put("/api/v1/situations/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE situations SET name = $1, description = $2 WHERE situation_id = $3 returning *",
            [req.body.name, req.body.description, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                situation: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Situation
app.delete("/api/v1/situations/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM situations WHERE situation_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

// ==========================================================================

// Get All Carriers

app.get("/api/v1/carriers", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM carriers");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                carriers: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Carriers Count
app.get("/api/v1/carriers/count", async (req, res) => {

    try {
        const results = await db.query("SELECT count_carrier();");


        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                counts: results.rows,

            },


        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Carrier
app.get("/api/v1/carriers/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM carriers WHERE carrier_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                carrier: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Carrier
app.post("/api/v1/carriers", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO carriers (brand, model, year, power, capacity) VALUES ($1, $2, $3, $4, $5) returning *", [req.body.brand, req.body.model, req.body.year, req.body.power, req.body.capacity]);


        res.status(201).json({
            status: "success",
            data: {
                carrier: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Carrier

app.put("/api/v1/carriers/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE carriers SET brand = $1, model = $2, year = $3, power = $4, capacity = $5 WHERE carrier_id = $6 returning *",
            [req.body.brand, req.body.model, req.body.year, req.body.power, req.body.capacity, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                carrier: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Carrier
app.delete("/api/v1/carriers/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM carriers WHERE carrier_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

// ==========================================================================

// Get All Inventory

app.get("/api/v1/inventory", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM inventory");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                inventory: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Inventory Count
app.get("/api/v1/inventory/count", async (req, res) => {

    try {
        const results = await db.query("SELECT count_inventory();");


        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                counts: results.rows,

            },


        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Inventory
app.get("/api/v1/inventory/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM inventory WHERE inventory_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                inventory: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Inventory
app.post("/api/v1/inventory", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO inventory (desription, weight) VALUES ($1, $2) returning *", [req.body.description, req.body.weight]);


        res.status(201).json({
            status: "success",
            data: {
                inventory: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Inventory

app.put("/api/v1/inventory/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE inventory SET desription = $1, weight = $2 WHERE inventory_id = $3 returning *",
            [req.body.description, req.body.weight, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                inventory: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Inventory
app.delete("/api/v1/inventory/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM inventory WHERE inventory_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});



// ==========================================================================
// TOWN

// Get All Towns

app.get("/api/v1/towns", async (req, res) => {

    try {
        const results = await db.query(`SELECT towns.town_id, cities.name AS "city_name", towns.name AS "town_name" FROM cities JOIN towns ON towns.city = cities.city_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                towns: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Town
app.get("/api/v1/towns/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM towns WHERE town_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                town: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Town
app.post("/api/v1/towns", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO towns (city, name) VALUES ($1, $2) returning *", [req.body.city_id, req.body.name]);


        res.status(201).json({
            status: "success",
            data: {
                town: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Town
app.delete("/api/v1/towns/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM towns WHERE town_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Town

app.put("/api/v1/towns/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE towns SET city = $1, name = $2 WHERE town_id = $3 returning *",
            [req.body.city_id, req.body.name, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                town: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// ==========================================================================
// ADDRESS

// Get All Addresses
app.get("/api/v1/address", async (req, res) => {

    try {
        const results = await db.query(`SELECT address.adress_id,address.name,address.tag,companies.name AS company_name,cities.name AS city_name,towns.name AS town_name,address.address FROM address JOIN companies ON address.company = companies.company_id JOIN cities ON address.city = cities.city_id JOIN towns ON address.town = towns.town_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                address: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Address
app.get("/api/v1/address/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM address WHERE adress_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                address: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Address
app.post("/api/v1/address", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO address (name, tag, company, city, town, address) VALUES ($1, $2, $3, $4, $5, $6) returning *", [req.body.name, req.body.tag, req.body.company_id, req.body.city_id, req.body.town_id, req.body.address]);


        res.status(201).json({
            status: "success",
            data: {
                address: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Address
app.delete("/api/v1/address/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM address WHERE adress_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Address

app.put("/api/v1/address/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE address SET name = $1, tag = $2, company= $3, city= $4, town= $5, address= $6  WHERE adress_id = $7 returning *",
            [req.body.name, req.body.tag, req.body.company_id, req.body.city_id, req.body.town_id, req.body.address, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                town: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// ==========================================================================
// VEHICLE

// Get All Vehicles

app.get("/api/v1/vehicles", async (req, res) => {

    try {
        const results = await db.query(`SELECT vehicles.vehicle_id ,carriers.brand ,carriers.model ,vehicles.license_plate ,situations.name AS status FROM vehicles JOIN carriers ON vehicles.carrier = carriers.carrier_id JOIN situations ON vehicles.status = situations.situation_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                vehicles: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Vehicle
app.get("/api/v1/vehicles/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM vehicles WHERE vehicle_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                vehicle: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Vehicle
app.post("/api/v1/vehicles", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO vehicles (carrier,status,license_plate) VALUES ($1, $2, $3) returning *", [req.body.carrier_id, req.body.situation_id, req.body.license_plate]);


        res.status(201).json({
            status: "success",
            data: {
                vehicle: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Vehicle
app.delete("/api/v1/vehicles/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM vehicles WHERE vehicles_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Vehicle

app.put("/api/v1/vehicles/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE vehicles SET carrier = $1, status = $2, license_plate = $3 WHERE vehicle_id = $4 returning *",
            [req.body.carrier_id, req.body.situation_id, req.body.license_plate, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                vehicle: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// ==========================================================================
// DRIVER

// Get All Drivers

app.get("/api/v1/drivers", async (req, res) => {

    try {
        const results = await db.query(`SELECT drivers.driver_id,drivers.first_name,drivers.last_name,drivers.contact_info,carriers.brand,carriers.model,situations.name,drivers.balance FROM drivers JOIN vehicles ON drivers.auth_vehicle = vehicles.vehicle_id JOIN carriers ON vehicles.carrier = carriers.carrier_id JOIN situations ON drivers.status = situations.situation_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                drivers: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Drivers Count
app.get("/api/v1/drivers/count", async (req, res) => {

    try {
        const results = await db.query("SELECT count_driver();");


        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                counts: results.rows,

            },


        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Driver
app.get("/api/v1/drivers/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM drivers WHERE driver_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                driver: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Driver
app.post("/api/v1/drivers", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO drivers (first_name,last_name,contact_info,auth_vehicle,status,balance) VALUES ($1, $2, $3, $4, $5, $6) returning *", [req.body.first_name, req.body.last_name, req.body.contact_info, req.body.auth_vehicle_id, req.body.situation_id, req.body.balance]);


        res.status(201).json({
            status: "success",
            data: {
                driver: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Drive
app.delete("/api/v1/drivers/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM drivers WHERE driver_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Driver

app.put("/api/v1/drivers/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE drivers SET first_name = $1, last_name = $2, contact_info = $3, auth_vehicle= $4, status= $5 WHERE driver_id = $6 returning *",
            [req.body.first_name, req.body.last_name, req.body.contact_info, req.body.vehicle_id, req.body.situation_id, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                driver: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// ==========================================================================
// ORDER

// Get All Orders

app.get("/api/v1/orders", async (req, res) => {

    try {
        const results = await db.query(`SELECT
        orders.order_id,
        companies.name AS company_name,
        inventory.desription AS description,
        address.address
      FROM orders
      JOIN companies ON orders.company = companies.company_id
      JOIN inventory ON orders.item = inventory.inventory_id
      JOIN address ON orders.address = address.adress_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                orders: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Order
app.get("/api/v1/orders/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM orders WHERE order_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                order: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Order
app.post("/api/v1/orders", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO orders (company,item,address) VALUES ($1, $2, $3) returning *", [req.body.company_id, req.body.item_id, req.body.address_id]);


        res.status(201).json({
            status: "success",
            data: {
                order: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Order
app.delete("/api/v1/orders/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM orders WHERE order_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Order

app.put("/api/v1/orders/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE orders SET company = $1, item = $2, address = $3 WHERE order_id = $4 returning *",
            [req.body.company_id, req.body.inventory_id, req.body.address_id, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                order: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// ==========================================================================
// PAYMENTS

// Get All Payments

app.get("/api/v1/payments", async (req, res) => {

    try {
        const results = await db.query(`SELECT p.payment_id, i.desription AS order_name,p.amount,p.payment_method, s.name AS situation_name
        FROM payments p
        JOIN orders o ON p.order_name = o.order_id
        JOIN situations s ON p.status = s.situation_id
        JOIN inventory i ON o.item = i.inventory_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                payments: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Payment
app.get("/api/v1/payments/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM payments WHERE payment_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                payment: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Payment
app.post("/api/v1/payments", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO payments (order_name, amount, payment_method, status) VALUES ($1, $2, $3, $4) returning *", [req.body.order_id, req.body.amount, req.body.payment_method, req.body.situation_id]);


        res.status(201).json({
            status: "success",
            data: {
                payment: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Payment //bitmedi

app.put("/api/v1/payments/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE payments SET order_name = $1, amount = $2, payment_method= $3, status = $4 WHERE payment_id = $5 returning *",
            [req.body.order_id, req.body.amount, req.body.payment_method, req.body.situation_id, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                payment: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Payment
app.delete("/api/v1/payments/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM payments WHERE payment_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

// ==========================================================================
// SHIPMENTS

// Get All Shipments

app.get("/api/v1/shipments", async (req, res) => {

    try {
        const results = await db.query(`SELECT s.shipment_id, c1.name AS sender_name, c2.name AS recipient_name, a1.address AS sender_address, a2.address AS recipient_address,s.content, si.name AS status_name
        FROM shipments s
        INNER JOIN companies c1 ON s.sender_id = c1.company_id
        INNER JOIN companies c2 ON s.recipient_id = c2.company_id
        INNER JOIN address a1 ON s.sender_address = a1.adress_id
        INNER JOIN address a2 ON s.recipient_address = a2.adress_id
        LEFT JOIN situations si ON s.status = si.situation_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                shipments: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});


// Get a Shipment
app.get("/api/v1/shipments/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM shipments WHERE shipment_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                shipment: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Shipment
app.post("/api/v1/shipments", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO shipments (sender_id, recipient_id,sender_address,recipient_address,status,content) VALUES ($1, $2, $3, $4, $5, $6) returning *", [req.body.sender_id, req.body.recipient_id, req.body.sender_address, req.body.recipient_address, req.body.status, req.body.content]);


        res.status(201).json({
            status: "success",
            data: {
                shipment: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Shipment

app.put("/api/v1/shipments/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE shipments SET sender_id = $1, recipient_id = $2, sender_address = $3, recipient_address = $4, status = $5, content = $6  WHERE shipment_id = $7 returning *",
            [req.body.sender_id, req.body.recipient_id, req.body.sender_address, req.body.recipient_address, req.body.status, req.body.content, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                shipment: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Shipment
app.delete("/api/v1/shipments/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM shipments WHERE shipment_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

// ==========================================================================
// DELIVERIES

// Get All Deliveries
app.get("/api/v1/deliveries", async (req, res) => {

    try {
        const results = await db.query(`SELECT deliveries.delivery_id, shipments.content, drivers.first_name, drivers.last_name, inventory.desription, vehicles.license_plate, situations.name
        FROM deliveries
        JOIN drivers ON deliveries.driver = drivers.driver_id
        JOIN orders ON deliveries.order_name = orders.order_id
        JOIN vehicles ON deliveries.vehicle = vehicles.vehicle_id
        JOIN situations ON deliveries.status = situations.situation_id
        JOIN shipments ON deliveries.shipment = shipments.shipment_id
        JOIN inventory ON orders.item = inventory.inventory_id;`);

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                deliveries: results.rows,
            },

        });
    } catch (err) {
        console.log(err);
    }

});

// Get a Delivery
app.get("/api/v1/deliveries/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM deliveries WHERE delivery_id = $1", [
            req.params.id
        ]);

        res.status(200).json({
            status: "success",
            data: {
                delivery: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err); // This is where the error is thrown / Burada hatanın nerede olduğunu fırlatılıyor
    }
});

// Create a Delivery
app.post("/api/v1/deliveries", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO deliveries (shipment, driver,order_name,vehicle,status) VALUES ($1, $2, $3, $4, $5) returning *", [req.body.shipment_id, req.body.driver_id, req.body.order_id, req.body.vehicle_id, req.body.situation_id]);


        res.status(201).json({
            status: "success",
            data: {
                delivery: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


//Update Delivery

app.put("/api/v1/deliveries/:id", async (req, res) => {

    try {

        const results = await db.query("UPDATE deliveries SET shipment = $1, driver = $2, order_name = $3, vehicle = $4, status = $5 WHERE delivery_id = $6 returning *",
            [req.body.shipment_id, req.body.driver_id, req.body.order_id, req.body.vehicle_id, req.body.situation_id, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                delivery: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }

});

// Delete Delivery
app.delete("/api/v1/deliveries/:id", (req, res) => {

    try {
        const results = db.query("DELETE FROM deliveries WHERE delivery_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});





