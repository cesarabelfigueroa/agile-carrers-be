module.exports = {
  development: {
    username: 'sdjvkuuczixnsx',
    password: '55f9947a2ca30a6df5a5a05bd5bc7163995c03203bc34ff0fc835de9c5d8266d',
    database: 'd2a63atcom9pn4',
    host: 'ec2-107-21-236-219.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    extra: {
      ssl: true,
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
