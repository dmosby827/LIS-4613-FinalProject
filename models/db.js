const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!Brianna12',
    database: 'blog'
  });

// Connect to the database
connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

// Export the connection for use in other parts of the application
module.exports = connection;