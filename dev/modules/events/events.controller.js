const {createEventServices,getEventsServices}=require("./events.services")

module.exports = {
    getEventsController:(req,res)=>{
        getEventsServices((err,result)=>{
            if (err){
                res.send("error")
            }
            else{
                res.json(result)
            }
        })
        
    },
    createEventController:(req,res)=>{
        const event_name = req.body.eventname;
        const fdate=req.body.fdate;
        const tdate=req.body.tdate;
        const is_active = req.body.is_active;
        createEventServices(event_name,fdate,tdate,is_active,(err,result)=>{
            if (err){
                res.send("error")
            }
            else{
                res.json(result)
            }
        });
        
    },
}