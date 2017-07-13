var express = require('express');
var router = express.Router();
var UserApp=require('../models/UserApp');

router.get('/:id?',function(req,res,next){

if(req.params.id){
    UserApp.getUserAppById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{
 UserApp.getAllUserApps(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){

        UserApp.addUserApp(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
router.delete('/:id',function(req,res,next){
        UserApp.deleteUserApp(req.params.id,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }
        });
});
router.put('/',function(req,res,next){
    UserApp.updateUserApp(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;