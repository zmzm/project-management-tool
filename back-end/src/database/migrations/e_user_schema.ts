
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('email', 64).unique();
      table.string('password', 256).notNullable();
      table.integer('role_id')
        .unsigned()
        .references('id')
        .inTable('role');
      table.integer('team_id')
        .unsigned()
        .references('id')
        .inTable('team');
      table.string('first_name', 64).notNullable();
      table.string('last_name', 64).notNullable();
      table.timestamp('created_at').defaultTo(db.fn.now());
      table.timestamp('updated_at').defaultTo(db.fn.now());
    })
    .then(() => db(' user').insert([
      {
        email: 'teastd@sdfsdf.sdfsdf',
        password: 'asdasdasd123213',
        role_id: 1,
        team_id: 1,
        first_name: 'Test',
        last_name: 'Testov',
      },
      {
        email: 'teast2@sdfsdf.sdfsdf',
        password: 'asdasdasd123213',
        role_id: 2,
        team_id: 1,
        first_name: 'Test2',
        last_name: 'Testov2',
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('user');
}
