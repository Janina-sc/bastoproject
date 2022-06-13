import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Paging from "./Paging";



const CattleList = () => {
  const [list, setList] = useState([]);

   //Pagination
   const [currentPage, setCurrentPage] = useState(1)
   const [cattlesOnPage, setCattlesOnPage] = useState(10)
   const indexLastCattle = currentPage * cattlesOnPage
   const indexFirstCattle = indexLastCattle - cattlesOnPage
   const currentCattles = list?.slice(indexFirstCattle, indexLastCattle)

   const pag= (pageNum) => {
       setCurrentPage(pageNum)
   }

  useEffect(() => {
    const getCattles = async () => {
      const res = await axios.get("http://localhost:4000/api/cattles");
      setList(res.data); //all the information that we receive is saved in setList
      console.log(res.data);
    };
    getCattles();
  }, [list.value]); //everytime there is a change in list it will re render//to evoil infinite loop!!!

  // Delete cattle

  const deleteCattle = async (id) => {
    await axios.delete("http://localhost:4000/api/cattles/" + id);
  };

  return (
   
   <div className="table-responsive">
    <table className="table table-hover ">
        <thead className="table-light">
          <tr >
          
            <th scope="col">ID Senasa</th>
            <th scope="col">Tipo de animal</th>
            <th scope="col">Peso</th>
            <th scope="col">Potrero</th>
            <th scope="col">Dispositivo</th>
            <th scope="col">Número de Dispositivo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody >
         {currentCattles?.map((l) => (
           <tr>

            <>
            
              <td >{l.senasaId}</td>
              <td >{l.animal}</td>
              <td>{l.weight}</td>
              <td>{l.paddock} </td>
              <td>{l.device}</td>
              <td>{l.numberDevice}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCattle(l._id)}
                  
                >
                  Eliminar
                </button>
                <Link className="btn btn-primary m-1" to={"/edit/" + l._id} style={{width:"7.5rem", height:"2.5rem"}} >
                  Editar
                </Link>
              </td>
             
             
            </>
          </tr>
          ))}
        </tbody>
      </table>
      <div className='col'> 
                <Paging
        cattlesOnPage={cattlesOnPage}
        allCattles={list.length}
        pag={pag}

     /> 
             </div> 
      </div>
    
    
     

     

  );
};

export default CattleList;
