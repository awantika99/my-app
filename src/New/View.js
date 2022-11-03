import React from 'react'
import Button from 'react-bootstrap/Button'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const View = ({input,deleteVal}) => {

  
    
    return(
     input.map(val=>(
        
          <tr key={val.email} >
             
            <td>{val.email}</td>
            
            <td className='delete-btn' >
             <Button onClick={()=> deleteVal(val.email)}><AiFillDelete/></Button>
            <Link to={'/edit'}> 
            <Button onClick={()=> deleteVal(val.email)}><AiFillEdit/></Button> 
           </Link> 
            </td>
          </tr>
   
)))
}

export default View