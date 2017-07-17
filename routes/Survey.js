var express = require('express');
var router = express.Router();
var Survey=require('../models/Survey');

router.get('/:from/:to',function(req,res,next){
    var from = req.params.from;
    var to = req.params.to;

    Survey.getAll(from, to, function(err,rows){

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

router.post('/',function(req,res,next){
        Survey.add(req.body,function(err,count){
            
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);//or return count for 1 & 0
            }
        });
});

module.exports=router;