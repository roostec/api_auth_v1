exports.up = async (knex) => {
  await knex.schema.createTable("permissions", (tb) => {
    tb.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    tb.string("name").notNullable();
    tb.string("description").notNullable();
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.timestamp("updated_at");
    console.log("permissions table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("permissions");
