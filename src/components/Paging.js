import React, { useId } from 'react'
import styles from './Paging.module.css'

export default function Paging({cattlesOnPage, allCattles, pag, next, previous}){
const pageNumbers = []

for(let i=0; i<Math.ceil(allCattles/cattlesOnPage); i++){
    pageNumbers.push(i +1)
}

const  id = useId()
return(



    <div className={styles.container}>
        <ul className={styles.paging}>
     
            {
                pageNumbers && pageNumbers.map((num,id)=>{
                    return(
                         <button key={`page-${id}`} className='page-link' onClick={()=>pag(num)}>{num}</button>
                    )
                   
                })
            }
         
        </ul>
    </div>
)

}