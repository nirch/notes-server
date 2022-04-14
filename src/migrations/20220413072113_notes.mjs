export function up(knex) {
    return knex.schema.createTable('notes', function (table) {
      table.increments('id').primary();
      table.string('text').notNull();
      table.string('title');
      table.string('userId')
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('notes');
  }
  