
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
        id: 1,
        card_name: 'Test card',
        about: 'Test test test test test',
        user_id: 1,
        list_id: 1,
      },
      {
        id: 2,
        card_name: 'Test2 card',
        about: 'Test2 test2 test2 test2 test2',
        user_id: 1,
        list_id: 1,
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('card');
}
