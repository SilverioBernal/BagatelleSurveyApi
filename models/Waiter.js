var db = require('../dbConnection'); // refernce to dbConnection

var Waiter = {
    getAllWaiters:function(callback){
        return db.query("select * from Waiter", callback);
    },
    getWaiterById:function(id, callback){
        return db.query("select * from Waiter where id = ?",[id], callback);
    },
    addWaiter:function(Waiter, callback){
        return db.query("insert into Waiter values(?, ?)",[Waiter.description], callback);
    },
    deleteWaiter:function(id, callback){
        return db.query("delete from Waiter where id = ?",[id], callback);
    },
    updateWaiter:function(Waiter, callback){
        return db.query("update Waiterset description = ? where id = ?",[Waiter.description, Waiter.id], callback);
    }
};

module.exports=Waiter;