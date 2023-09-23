const {connection} =require('../../db/db_config.js')

const getEventsServices = (
    callback
) =>{
    connection.query("SELECT * FROM `events`" ,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

const createEventServices = (
    event_name,fdate,tdate,is_active,callback
) =>{
    connection.query(`INSERT INTO events VALUES(NULL,"${event_name}","${fdate}","${tdate}","${is_active}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)` ,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

module.exports={createEventServices,getEventsServices}