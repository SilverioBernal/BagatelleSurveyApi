var db = require('../dbConnection'); // refernce to dbConnection

var UserApp = {
    getAllUserApps:function(callback){
        return db.query("select id, description, rolMesero, rolAdmin,'' as password, active from `Bagatelle`.`AppUser`", callback);
    },
    getUserAppById:function(id, callback){
        return db.query("select id, description, rolMesero, rolAdmin, cast(aes_decrypt(password,  UNHEX(SHA2('My secret passphrase',512))) as char) password, active  from AppUser where id = ?",[id], callback);
    },
    addUserApp:function(UserApp, callback){
        return db.query("insert into AppUser set ?",[UserApp], callback);
    },
    deleteUserApp:function(id, callback){
        return db.query("delete from AppUser where id = ? ",[id], callback);
    },
    updateUserApp:function(UserApp, callback){
        return db.query("update AppUser set description = ?, rolMesero = ?, rolAdmin = ?, password = AES_ENCRYPT(?, UNHEX(SHA2('My secret passphrase',512))), active = ? where id = ?",
        [            
            UserApp.description,
            UserApp.rolMesero,
            UserApp.rolAdmin,
            UserApp.password,
            UserApp.active,
            UserApp.id
        ], callback);
    }
};

module.exports=UserApp;