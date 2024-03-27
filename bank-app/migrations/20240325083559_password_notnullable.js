/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('accounts', (table) => {
    table.string('salt', 32).notNullable().alter()
    table.string('hashed_password', 128).notNullable().alter()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('accounts', (table)=>{
        table.string('hashed_password', 128).nullable().alter()
        table.string('salt', 32).nullable().alter()
    })
  
};
