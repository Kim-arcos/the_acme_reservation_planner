const { client, createTables } = require('./db');

async function init() {
  try {
    await client.connect();
    await createTables();
    console.log('connected to the database');
  } catch (err) {
    console.error(err);
  }
}

init();
