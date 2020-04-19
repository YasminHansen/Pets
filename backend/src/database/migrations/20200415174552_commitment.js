
exports.up = function(knex) {
    return knex.schema.createTable('commitment', function(table){
        table.increments();
        table.string('description').notNullable();
      /*  table.integer('bath').notNullable();
        table.integer('medication').notNullable();
        table.integer('vet_consultation').notNullable();
        table.integer('special_food').notNullable();*/
    });
}

exports.down = function(knex) {
    knex.schema.dropTable('commitment');
};
