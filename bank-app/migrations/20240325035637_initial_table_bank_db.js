/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('accounts', (table)=>{
        table.increments()
        table.string('user_name', 128).notNullable()
        table.string('email', 64).notNullable()
        table.decimal('balance').notNullable()
        table.integer('account_number').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema 
  .dropTable('accounts')
};
