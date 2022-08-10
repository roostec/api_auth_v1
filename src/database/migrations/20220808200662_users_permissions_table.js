exports.up = async (knex) => {
  await knex.schema.createTable("users_permissions", (tb) => {
    tb.uuid("user_id").notNullable();
    tb.foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.uuid("permission_id").notNullable();
    tb.foreign("permission_id")
      .references("permissions.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.primary(["user_id", "permission_id"]);
    console.log("users_permissions table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("users_permissions");
