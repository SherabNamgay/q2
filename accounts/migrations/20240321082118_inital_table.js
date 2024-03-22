/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments();
      table.string('username',128).notNullable();
      table.string('email',128).notNullable();
    })
    .createTable('accounts', (table) =>{
        table.increments();
        table.integer('user_id').unsigned().references('users.id').notNullable();
    })
    .createTable('income',(table) => {
        table.increments();
        table.integer('account_id').unsigned().references('accounts.id').notNullable();
        table.dateTime('date').notNullable;
        table.integer('amount').notNullable();
        table.string('remarks').notNullable();
    })
    .createTable('expenses',(table) => {
      table.increments();
      table.integer('account_id').unsigned().references('accounts.id').notNullable();
      table.dateTime('date').notNullable;
      table.integer('amount').notNullable();
      table.string('remarks').notNullable();
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('expenses')
    .dropTable('income')
    .dropTable('accounts')
    .dropTable('users')
  
};
