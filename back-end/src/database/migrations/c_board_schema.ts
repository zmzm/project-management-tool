
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('board', (table) => {
      table.increments('id').primary();
      table.string('board_name', 64).unique().notNullable();
      table.boolean('is_closed').notNullable();
      table.integer('team_id')
        .unsigned()
        .references('id')
        .inTable(' team')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at').defaultTo(db.fn.now());
    })
    .then(() => db(' board').insert([
      {
        board_name: 'Test  board',
        id: 1,
        is_closed: false,
        team_id: 1,
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('board');
}
