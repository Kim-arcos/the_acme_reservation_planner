const { client, createTables, createCustomer, createRestaurant, createReservations, fetchCustomers, fetchRestaurants, fetchReservations } = require('./db');

async function init() {
  try {
    await client.connect();
    await createTables();
    await createCustomer();
    await createRestaurant();

    console.log(await fetchCustomers());
    console.log(await fetchRestaurants());
    await createReservations();
    console.log('connected to the database');
    console.log(await fetchRestaurants());
  } catch (err) {
    console.error(err);
  }
}

init();
