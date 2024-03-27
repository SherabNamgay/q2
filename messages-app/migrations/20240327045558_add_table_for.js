/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=>{
            table.increments();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
        })
        .createTable('messages', (table)=>{
            table.increments();
            table.integer('sender_id').unsigned().references('users.id');
            table.integer('receiver_id').unsigned().references('users.id');
            table.string('message_content',1024).notNullable();
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('messages')
        .dropTable('users')
};
