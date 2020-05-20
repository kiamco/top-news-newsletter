const { v4: uuidv4 } = require('uuid');

exports.up = function(knex) {
    return knex.schema
        .createTable('emails', email => {
            email.increments('id').primary;
            email.string('email', 255)
                .notNullable()
                .unique();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('emails')
};