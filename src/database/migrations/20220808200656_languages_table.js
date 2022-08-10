exports.up = async (knex) => {
  await knex.schema.createTable("languages", (tb) => {
    tb.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    tb.string("label").notNullable();
    tb.string("code").notNullable();
    tb.string("flag").notNullable();
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.timestamp("updated_at");
    console.log("languages table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("languages");
