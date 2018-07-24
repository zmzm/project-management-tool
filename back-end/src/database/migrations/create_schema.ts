
import * as knex from 'knex';

export function up(db: knex) {
  return db.schema
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('email', 64).unique();
      table.string('password', 256).notNullable();
      table.enum('role', ['user', 'admin']).notNullable();
      table.string('first_name', 64).notNullable();
      table.string('last_name', 64).notNullable();
      table.dateTime('created').notNullable();
      table.dateTime('updated').notNullable();
    })
    .then(() => db('user').insert([
      {
        id: 1,
        email: 'teastd@sdfsdf.sdfsdf',
        password: 'asdasdasd123213',
        role: 'user',
        first_name: 'Test',
        last_name: 'Testov',
        created: '29.06.2018',
        updated: '29.06.2018',
      },
    ]));
}

export function down(db: knex) {
  return db.schema.dropTable('task').dropTable('user');
}
