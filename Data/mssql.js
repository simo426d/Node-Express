var dbConfig = {
    driver: 'msnodesqlv8',  
    server: "(localdb)\\mssqllocaldb",
    database: "PersonDB",
    user: "",
    password: "",
    options: {
      trustedConnection: true
  },
  debug: true,
  parseJSON: true
};

  module.exports = dbConfig;