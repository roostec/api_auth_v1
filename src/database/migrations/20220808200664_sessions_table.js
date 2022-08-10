exports.up = async (knex) => {
  await knex.schema.createTable("sessions", (tb) => {
    tb.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    tb.uuid("user_id").notNullable();
    tb.foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.string("token").notNullable();
    tb.uuid("refresh_token").notNullable();
    tb.string("ip").notNullable();
    tb.string("user_agent").notNullable();
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.timestamp("logouted_at");
    console.log("sessions table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("sessions");
