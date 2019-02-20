
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('comment', (table) => {
      table.increments('id').primary();
      table.string('comment_text').notNullable();
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('user');
      table.integer('card_id')
        .unsigned()
        .references('id')
        .inTable('card')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at').defaultTo(db.fn.now());
    })
    .then(() => db('comment').insert([
      {
        card_id: 1,
        comment_text: 'Test comment',
        id: 1,
        user_id: 1,
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('comment');
}
