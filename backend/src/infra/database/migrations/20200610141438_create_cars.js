exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('license_plate').notNullable();
        table.string('chassi').notNullable();
        table.string('renavam').notNullable();
        table.string('model').notNullable();
        table.string('company').notNullable();
        table.string('year').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};
