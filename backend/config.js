module.exports = {
    port: process.env.PORT || 3000,
    dbConnectionString: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/mydatabase',
    jwtSecret: process.env.JWT_SECRET || 'mysecretkey',
  };
  

  