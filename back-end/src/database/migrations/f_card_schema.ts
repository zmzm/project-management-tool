
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('card', (table) => {
      table.increments('id').primary();
      table.string('card_name', 64).unique().notNullable();
      table.string('about', 256).notNullable();
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('user');
      table.integer('list_id')
        .unsigned()
        .references('id')
        .inTable('list')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at').defaultTo(db.fn.now());
    })
    .then(() => db('card').insert([
      {
        about: 'Test test test test test',
        card_name: 'Test card',
        id: 1,
        list_id: 1,
        user_id: 1,
      },
      {
        about: 'Test2 test2 test2 test2 test2',
        card_name: 'Test2 card',
        id: 2,
        list_id: 1,
        user_id: 1,
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('card');
}
