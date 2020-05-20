const { v4: uuidv4 } = require('uuid');

exports.up = function(knex) {
    return knex.schema
        .createTable('email', user => {
            user.uuid(uuidv4()).primary;
            user.string('email', 255)
                .notNullable()
                .unique();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};