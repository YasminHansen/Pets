
exports.up = function(knex) {
    return knex.schema.createTable('schedule', function(table){
        table.increments();
        table.datetime('date').notNullable();
        table.string('description').notNullable();

        table.string('commitment_value').notNullable();
        table.foreign('commitment_value').references('id').inTable('commitment');

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');
    });
}

exports.down = function(knex) {
    knex.schema.dropTable('schedule');
};
