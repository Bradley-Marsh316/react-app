
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('userId');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('image')
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
