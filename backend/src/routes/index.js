const {Router} =require('express');
const router= Router();
 

 const {getCattle, getCattleById, createCattle, deleteCattle, updateCattle}=require('../controller/cattle.controller')



//Get
router.route('/')  
.get(getCattle)
.post(createCattle)

router.route('/:id')
.get(getCattleById)
.delete(deleteCattle)
.put(updateCattle)



module.exports= router;