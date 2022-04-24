export function up(knex) {
  return knex.schema.alterTable("notes", function (table) {
    table.string("image_url");
  });
}
export function down(knex) {
  return knex.schema.dropTable("notes");
}
