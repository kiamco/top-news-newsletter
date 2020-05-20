// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
          debug: true,
          connection: process.env.PG_CONNECTION_STRING_DEV,
          acquireConnectionTimeout: 4 * 1000,
          pool: {
              min: 0,
              max: 7,
              afterCreate: (conn, done) => {
                  conn.query('SET timezone="UTC";', (err) => {
                      if (err) {
                          console.log(err)
                      }
                      done(err, conn)
                  })
              }
          },
          migrations: {
              directory: './database/development/migrations',
          },
          seeds: {
              directory: './database/development/seeds'
          },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};