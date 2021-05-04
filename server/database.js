const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'Jonathan',
    password: '1234567',
    database: 'graduacion' 
})

mysqlConn.connect((err) => 
{
    if(err)
    {
        console.log(err);
        return;
    }
    else console.log('Se ha establecido la conexion con la base de datos');
})

module.exports = mysqlConn;