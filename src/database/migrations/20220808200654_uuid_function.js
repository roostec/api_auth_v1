exports.up = async (knex) => {
  await knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  console.log("uuid-ossp extension created");
};

exports.down = async (knex) =>
  await knex.raw(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
