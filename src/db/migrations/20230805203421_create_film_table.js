/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
      .createTable('films', function (table){
          table.string('id',40).primary()
          table.string('descr', 255)
          table.string('year', 5)
          table.text('synopsis')
          table.text('image')
          table.dateTime('date_creation').defaultTo(knex.fn.now())
          table.string('created_by', 40)
          table.dateTime('date_update')
          table.string('changed_by', 40)
          table.string('status', 2)
      })
}

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('films')
}