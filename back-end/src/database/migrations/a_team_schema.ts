
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('team', (table) => {
      table.increments('id').primary();
      table.string('team_name', 64).unique().notNullable();
    })
    .then(() => db('team').insert([
      {
        team_name: 'Test team',
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('team');
}
