/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema 
    .alterTable('accounts', (table)=>{
        table.string('salt', 32)
        table.string('hashed_password', 128)
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('accounts', (table) =>{
    table.dropColumn('hashed_password')
    table.dropColumn('salt')
  })
};
