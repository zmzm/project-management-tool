
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('role', (table) => {
      table.increments('id').primary();
      table.string('role_name', 64).unique().notNullable();
    })
    .then(() => db('role').insert([
      {
        id: 1,
        role_name: 'ADMEN',
      },
      {
        id: 2,
        role_name: 'USER',
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('role');
}
