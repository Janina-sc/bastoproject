const cattleController={};

const Cattle= require('../models/Cattles')

cattleController.getCattle= async(req, res)=>{
    try{
    const cattle= await Cattle.find()
    res.json(cattle);
}catch(err){
    console.log(err)
}

}

cattleController.createCattle= async(req, res)=>{
    try{
    const {senasaId, animal, weight, paddock, device, numberDevice }=req.body;
 const newCattle= new Cattle({
     senasaId,
     animal,
     weight,
     paddock,
     device,
     numberDevice
    });
    console.log(newCattle);
    await newCattle.save();
res.json({status: "Cattle saved"})
}catch(err){
    console.log(err)
}   
}

//By id
cattleController.getCattleById= async(req, res)=>{
    try{
    const cattleById= await Cattle.findById(req.params.id)
    res.json(cattleById)
}catch(err){
    console.log(err)
}
}
cattleController.deleteCattle= async(req, res)=>{
    try{
    await Cattle.findByIdAndDelete(req.params.id)
    res.json({message: "cattle deleted"})
}catch(err){
    console.log(err)
}
}
cattleController.updateCattle= async(req, res)=>{
    try{
    const {senasaId,animal, weight, paddock, device, numberDevice}=req.body;
    await Cattle.findByIdAndUpdate(req.params.id, {
     senasaId,
     animal,
     weight,
     paddock,
     device,
     numberDevice,
    })
    res.json({message:"cattle updated"})
    }catch(err){
        console.log(err)
    }
    
}
module.exports=cattleController;