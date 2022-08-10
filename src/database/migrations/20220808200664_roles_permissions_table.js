exports.up = async (knex) => {
  await knex.schema.createTable("roles_permissions", (tb) => {
    tb.uuid("permission_id").notNullable();
    tb.foreign("permission_id")
      .references("permissions.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.uuid("role_id").notNullable();
    tb.foreign("role_id")
      .references("roles.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tb.timestamp("created_at").defaultTo(knex.fn.now());
    tb.primary(["permission_id", "role_id"]);
    console.log("roles_permissions table created");
  });
};
exports.down = async (knex) => await knex.schema.dropTable("roles_permissions");
