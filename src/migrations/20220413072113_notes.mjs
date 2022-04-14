export function up(knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments("id").primary();
    table.string("text").notNull();
    table.string("title");
    table.integer("userId").unsigned().references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}
export function down(knex) {
  return knex.schema.dropTable("notes");
}
