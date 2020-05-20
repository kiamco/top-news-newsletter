const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('emails').del()
        .then(function() {
            // Inserts seed entries
            const salt = bcrypt.genSaltSync(10);;
            return knex('emails').insert([{
                email: 'kimbo',
            }, ]);
        });
};