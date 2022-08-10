exports.up = async (knex) => {
  await knex.schema.createTable("preferences", (tb) => {
    tb.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    tb.uuid("user_id").notNullable();
    tb.foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.string("theme").notNullable().defaultTo("light");
    tb.string("language").notNullable().defaultTo("pt_BR");
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.timestamp("updated_at");
    console.log("preferences table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("preferences");
