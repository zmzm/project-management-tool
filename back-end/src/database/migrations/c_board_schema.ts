import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('board', table => {
      table.increments('id').primary();
      table
        .string('board_name', 64)
        .unique()
        .notNullable();
      table.boolean('is_closed').notNullable();
      table
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('team_id')
        .unsigned()
        .references('id')
        .inTable('team')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at').defaultTo(db.fn.now());
    })
    .then(() =>
      db(' board').insert([
        {
          board_name: 'Test  board',
          id: 1,
          is_closed: false,
          owner_id: 1,
          team_id: 1,
        },
        {
          board_name: 'Test personal board',
          id: 2,
          is_closed: false,
          owner_id: 1,
          team_id: null,
        },
      ]),
    );
}

export function down(db: knex) {
  return db.schema.dropTable('board');
}
