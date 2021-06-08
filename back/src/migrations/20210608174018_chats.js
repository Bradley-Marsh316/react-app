
exports.up = function(knex) {
  return knex.schema.createTable('chats', function(table) {
    table.increments('chatId');
    table.integer('recipientId').notNullable().references('userId').inTable('users');
    table.integer('senderId').notNullable().references('userId').inTable('users');
    table.string('message').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chats');
};
