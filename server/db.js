const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE_URL ||
    "postgres://localhost/the_acme_reservation_planner_db"
);

async function createTables() {
  const SQL = `
 DROP TABLE IF EXISTS customers ;
 DROP TABLE IF EXISTS restaurants;
 DROP TABLE IF EXISTS reservations;

 CREATE TABLE reservations(
    id UUID PRIMARY KEY,
    department_date DATE NOT NULL
    customers_id UUID REFERENCES customers(id) NOT NULL );
    restaurants_id UUID REFERENCES restaurants(id) NOT NULL );
);

 CREATE TABLE restaurants(
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
 );

 CREATE TABLE customers(
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
 );
`;

  await client.query(SQL);
}

module.exports = {
  client,
  createTables,
};
