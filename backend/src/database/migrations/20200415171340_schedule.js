
exports.up = function(knex) {
    return knex.schema.createTable('schedule', function(table){
        table.increments();
        table.datetime('date').nullable();
        table.string('description').nullable();
        table.integer('commitment').nullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');
    });
}

exports.down = function(knex) {
    knex.schema.dropTable('schedule');
};

