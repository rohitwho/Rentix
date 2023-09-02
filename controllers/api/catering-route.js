//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const {  Catering } = require('../../models');

// THE CATERING ENDPOINTS
router.get('/',async (req, res) => {
    
    try{
      const cateringData= await Catering.findAll()
    // serialize Data
    const catering = cateringData.map((catering) => catering.get({plain:true}));
  
    res.render('catering',{
     catering,
      username: req.session.username,
        logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});


    router.get('/:id',async (req, res) => {
      // find one catering  by its `id` value
      try{
       const catering =await Catering.findByPk(req.params.id,{
      
      });
      const cateringserial = catering.get({plain:true})
      console.log(cateringserial)
      res.render('catering',{
        cateringserial ,
    
        username: req.session.username,
        logged_in: req.session.logged_in
      })
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
      }});
    
    
    //EXPORT
module.exports = router;