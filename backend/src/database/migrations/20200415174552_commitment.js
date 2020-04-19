
exports.up = function(knex) {
    return knex.schema.createTable('commitment', function(table){
        table.increments();
        table.bool('bath').notNullable();
        table.bool('medication').notNullable();
        table.bool('vet_consultation').notNullable();
        table.bool('special_food').notNullable();
    });
}

exports.down = function(knex) {
    knex.schema.dropTable('commitment');
};
