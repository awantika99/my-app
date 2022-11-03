import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

import View from '../New/View';


const getDataFromLS = () => {

  const data = localStorage.getItem('input');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}


const Re = () => {

  //const navigate = useNavigate();


  

  const [input, setInput] = useState(getDataFromLS());


 const editVal = () => {
    
  }
  

 
  const deleteVal = (email) => {
    const filteredInput = input.filter((element, index) => {
      return element.email !== email
    })
    setInput(filteredInput);
  }


  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
  }, [input])

  return (

    <div className='view-container'>
      {input.length > 0 && <>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <View input={input} deleteVal={deleteVal} />
            </tbody>
          
          </table>
        </div>
        <button className='btn btn-danger btn-md'
          onClick={() => setInput([])}>Remove All</button>
          
      </>}
      {input.length < 1 && <div>ViewData</div>}
    </div>





  )
}

export default Re

