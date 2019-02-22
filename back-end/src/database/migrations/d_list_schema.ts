
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('list', (table) => {
      table.increments('id').primary();
      table.string('list_name', 64).unique().notNullable();
      table.integer('board_id')
        .unsigned()
        .references('id')
        .inTable('board')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .then(() => db('list').insert([
      {
        board_id: 1,
        id: 1,
        list_name: 'List 1',
      },
      {
        board_id: 1,
        id: 2,
        list_name: 'List 2',
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('list');
}
