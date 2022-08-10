exports.up = async (knex) => {
  await knex.schema.createTable("users_roles", (tb) => {
    tb.uuid("user_id").notNullable();
    tb.foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.uuid("role_id").notNullable();
    tb.foreign("role_id")
      .references("roles.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.primary(["user_id", "role_id"]);
    console.log("users_roles table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("users_roles");
