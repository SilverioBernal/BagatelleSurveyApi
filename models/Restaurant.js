var db = require('../dbConnection'); // refernce to dbConnection

var Restaurant = {
    getAllRestaurants:function(callback){
        return db.query("select * from Restaurant", callback);
    },
    getRestaurantById:function(id, callback){
        return db.query("select * from Restaurant where id = ?",[id], callback);
    },
    addRestaurant:function(Restaurant, callback){        
        
        return db.query("insert into Restaurant SET ?",[Restaurant], function(error, result) 
		{
			if(error)
			{
				callback(null, Restaurant);
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
    },
    deleteRestaurant:function(id, callback){
        return db.query("delete from Restaurant where id = ?",[id], callback);
    },
    updateRestaurant:function(Restaurant, callback){
        return db.query("update Restaurant set description = ? where id = ?",[Restaurant.description, Restaurant.id], callback);
    }
};

module.exports=Restaurant;