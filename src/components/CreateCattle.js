import React, {useState, useEffect} from 'react';
import styles from './CreateCattle.module.css';
import Select from 'react-select';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert'


const animals=[
    {value:'novillo', label:'Novillo'},
    {value:'toro', label:'Toro'},
    {value:'vaquillona', label:'Vaquillona'},
]
const devices=[
    {value:"collar", label:"Collar"},
    {value:"caravana", label: "Caravana"}
]

const CreateCattle = () => {
    const [kind, setKind]=useState(null);
    const [dev, setDev]=useState(null);
    const initialValue={
        senasaId:"",
        animal:animals.value,
        weight:"",
        paddock:"",
        device:devices.value,
        numberDevice:""

    }

      let {id}=useParams();

    const[cattle, setCattle]= useState(initialValue);
    const [subId, setSubId]=useState(id) //for using with update
    

    const handleChange=(e)=>{//get all the information that the "inputs" receive
        const {name, value}=e.target
        setCattle({...cattle, [name]:value})

    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(cattle);
        //to create the new cattle
        const newCattle={
            senasaId:cattle.senasaId,
            animal:cattle.animal,
            weight:cattle.weight,
            paddock:cattle.paddock,
            device:cattle.device,
            numberDevice:cattle.numberDevice
        }
        await axios.post("http://localhost:4000/api/cattles", newCattle)



        setCattle({...initialValue})//to clean the form
        

    }

    ////function to update cattle
    const updateCattle=async(e)=>{
      e.preventDefault();
      const updatedCattle={
        senasaId:cattle.senasaId,
        animal:cattle.animal,
        weight:cattle.weight,
        paddock:cattle.paddock,
        device:cattle.device,
        numberDevice:cattle.numberDevice


      }
      await axios.put('http://localhost:4000/api/cattles/' + subId, updatedCattle)
      setCattle({...initialValue})
      setSubId('')

    }

      //request to api
      const getOne= async(idValue)=>{
        const res= await axios.get("http://localhost:4000/api/cattles/" + idValue)
        setCattle({
          senasaId:res.data.senasaId,
          animal:res.data.animal,
          weight:res.data.weight,
          paddock:res.data.paddock,
          device:res.data.device,
          numberDevice:res.data.numberDevice

        })
      }
      useEffect(()=>{
        if(subId !==''){//if the id is empty let's do a request
          getOne(subId)

        }
      }, [subId])


    const handleSelect=(kind)=>{
        console.log(kind)
        setKind(kind)
        
        
}
    
    const handleSelectDev=(dev)=>{
        console.log(dev);
        setDev(dev)
    }


  return (
    <div className='col'>
        <h1 className='text-left mb-3'>Agregar tipo de animal</h1>
        <div className='card card-body'> 
        <form  onSubmit={handleSubmit}>
  {/* <div className="row mb-3"> */}  
      
      {/* SenasaId */}
      <div className="col-sm-6">
  <label for="senasaId" className="row-sm-6 col-form-label" aria-required >Id Senasa</label>
      <input type="text" className="form-control" id="senasaId" placeholder='Escriba 16 caracteres' name="senasaId" value={cattle.senasaId}
      onChange={handleChange}
      ></input>
    
  </div>

    {/* Select animal */}
     <div className="col-sm-6 row-sm-6 col-form-label" aria-required>
     <label required className= "row-sm-6 col-form-label" for="animal" aria-required>Animal</label>
         <Select
        value={kind}
        options={animals}
        onChange={handleSelect}
        
            /> 

   
  </div>
  {/* </div> */}
  {/*  weight input */}
  <div className="col-sm-6">
  <label for="weight" className="row-sm-6 col-form-label" aria-required >Peso</label>
      <input type="number" className="form-control" id="weight" placeholder='...kg' name="weight" required value={cattle.weight}
      onChange={handleChange}
      ></input>
    
  </div>

    {/* paddock input */}
    <div className="col-sm-6">
    <label for="paddock" className="row-sm-6 col-form-label" aria-required>Nombre del Potrero</label>
      <input type="text" className="form-control" id="potrero" placeholder='Escriba hasta 200 caracteres...' name="paddock" value={cattle.paddock}
      onChange={handleChange} required></input>
    </div>
    {/* device input */}
    <div className={styles.device}>
    <div className="col-sm-6" >
    <label className=" row-sm-6 col-form-label" for="device" aria-required required>Tipo de Dispositivo</label>

    <Select
    value={dev}
    options={devices}
    onChange={handleSelectDev}
    />

    
  </div>
  </div>
  {/* number device input */}
    <div className="col-sm-6">
  <label for="devicenumber" className="row-sm-6 col-form-label" aria-required >Número del Dispositivo</label>
      <input type="text" className="form-control" id="devicenumber" placeholder='Escriba un valor de 8 caracteres...' name="numberDevice" value={cattle.numberDevice} required
      onChange={handleChange}></input>
    
  </div>

  
  
  <button type="submit" className="btn btn-success mt-2 " onClick={handleSubmit}>Crear</button>

    </form>
 
<form onSubmit={updateCattle}>
  <button className='btn btn-danger mt-2'>Actualizar </button>
</form>


        </div>
        
    </div>



    
  )
}

export default CreateCattle;