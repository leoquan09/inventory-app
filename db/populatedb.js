require('dotenv').config();
const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Please provide a database connection string as an argument.");
  console.error("Usage: node populatedb.js postgres://user:password@localhost:5432/db_name");
  process.exit(1);
}

const SQL = `
-- Drop table if it exists to cleanly re-run the seed script locally
DROP TABLE IF EXISTS games CASCADE;

-- Create the games table with the explicit CHECK constraint on 'type'
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CONSTRAINT valid_game_type CHECK (type IN ('computer', 'tv', 'console'))
);

-- Insert dummy game entries matching your requirements
INSERT INTO games (name, type) VALUES
('Cyberpunk 2077', 'computer'),
('Super Mario Odyssey', 'console'),
('Street Fighter 6', 'tv'),
('Elden Ring', 'computer'),
('The Legend of Zelda: Tears of the Kingdom', 'console');
`;

async function main() {
  console.log("Seeding games database...");
  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Successfully seeded the 'games' table!");
  } catch (err) {
    console.error("Error seeding 'games' table:");
    console.error(err.message);
  } finally {
    await client.end();
  }
}

main();
