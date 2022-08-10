exports.up = async (knex) => {
  await knex.schema.createTable("users", (tb) => {
    tb.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    tb.string("first_name").notNullable();
    tb.string("last_name").notNullable();
    tb.string("password_hash").notNullable();
    tb.string("email").notNullable();
    tb.string("phone").notNullable();
    tb.boolean("is_confirmed").notNullable().defaultTo(false);
    tb.boolean("is_active").notNullable().defaultTo(true);
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.timestamp("updated_at");
    tb.timestamp("deleted_at");
    console.log("users table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("users");
