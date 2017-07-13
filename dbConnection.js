var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'Tecnologia.4',
 database:'Bagatelle'
 
});
 module.exports=connection;
 