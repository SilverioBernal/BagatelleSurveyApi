var db = require('../dbConnection'); // refernce to dbConnection

var Restaurant = {
    getAll:function(from, to, callback){
        return db.query("call surveyReport(?, ?)",[from, to], callback);
    },
    
    add:function(Survey, callback){        
        
        return db.query("insert into Survey SET ?",[Survey], function(error, result) 
		{
			if(error)
			{
				callback(null, Survey);
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
    }
};

module.exports=Restaurant;