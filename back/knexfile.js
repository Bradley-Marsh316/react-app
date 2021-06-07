// Update with your config settings.

module.exports = {
  local: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  },
  dev: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  }
};
