const mysql =require("mysql2");
const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root1234',
    port:"3306",
    database:"srmws",

});

connection.connect((err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("connected");
    }
});

module.exports = {connection};