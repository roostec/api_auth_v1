module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-44-207-126-176.compute-1.amazonaws.com",
      user: "ojvzgvmehbbsno",
      password:
        "8813a63ce1770b958cab504681d342248f5b38f677be997eb0228d6a4abe970e",
      database: "d96fru2qhh6m1j",
      port: "5432",
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/src/database/migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "ec2-44-207-126-176.compute-1.amazonaws.com",
      user: "ojvzgvmehbbsno",
      password:
        "8813a63ce1770b958cab504681d342248f5b38f677be997eb0228d6a4abe970e",
      database: "d96fru2qhh6m1j",
      port: "5432",
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
