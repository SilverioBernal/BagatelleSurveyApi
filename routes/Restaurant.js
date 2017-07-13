var express = require('express');
var router = express.Router();
var Restaurant=require('../models/Restaurant');

router.get('/:id?',function(req,res,next){

if(req.params.id){
    Restaurant.getRestaurantById(req.params.id,function(err,rows){

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
 Restaurant.getAllRestaurants(function(err,rows){

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
        Restaurant.addRestaurant(req.body,function(err,count){
            
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);//or return count for 1 & 0
            }
        });
});
/*
router.post('/:id',function(req,res,next){
    
  Restaurant.deleteAll(req.body,function(err,count){
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
*/
router.delete('/:id',function(req,res,next){

        Restaurant.deleteRestaurant(req.params.id,function(err,count){

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
    Restaurant.updateRestaurant(req.body,function(err,rows){
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