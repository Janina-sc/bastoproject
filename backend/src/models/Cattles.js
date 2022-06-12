const { Schema, model }=require("mongoose");



const cattlesSchema= new Schema({

    senasaId:{
        type:String,
        // required:true,
        // unique:true,
        // minlength:16,
        // maxlength:16
    },

    animal:{
        type:String,
        // enum:["novillo", "toro", "vaquillona"],
        // required:true,
        
    },
    weight:{
        type: Number,
        // required:true,
    },
    paddock:{
        type:String,
        // required:true,
        // maxlength:200,
    },
    device:{
        type:String,
        // enum:["collar", "caravana"],
        // required:true,
    },
    numberDevice:{
        type:String,
        // minlength:8,
        // maxlength:8,
        // required:true,
        // unique:true,
    }

},{
    timestamps:true,
    versionKey:false
}
)


 

module.exports= model("CattlesSchemas", cattlesSchema)