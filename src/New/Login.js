import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import View from '../New/View';
//import Re from '../New/Re';
//import { useNavigate } from 'react-router-dom'
import Image from './Image'

const getDataFromLS=()=>{

    const data = localStorage.getItem('input');
     if(data)
     { 
        return JSON.parse(data);
    }
    else{
        return[]
     }
}


const Login = () => {

   // const navigate = useNavigate();

const[input, setInput] = useState(getDataFromLS());
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    let val ={
        
        email,
        password
    }
    setInput([...input,val]);
    setEmail('');
    setPassword('');
    alert('you are succefully logged in');
    //navigate('/re')
};




  
  

useEffect(()=>{
        localStorage.setItem("input",JSON.stringify(input));
         },[input])

         
   

//     const[input, setInput] = useState({
//         email:"",
//         password:"",
//     });


//     let name , value;

//     const handleInputs = (e) => {
//     console.log(input);
//     name= e.target.name;
//     value = e.target.value;

//     setInput({...input, [name] : value});
// }

//     const handleSubmit = (e) => {
//         e.preventDefault();

    
//        const loggeduser = JSON.parse(localStorage.getItem("user"));

//        if(input.email === loggeduser.email && 
//         input.password === loggeduser.password)
//       {
//             localStorage.setItem("loggedin", true)
//             navigate("/viewdata");
//          } 
//         else{
//        alert("Password or Email Is Wrong")
//         }
        
    

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>LogIn</h3>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" 
                                name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password'   value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' 
                                 style={{ background: "blue"}} type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>
                   
                    <Image />
                </section>
             
            </div>
            {/* <div className='view-container'>
          {input.length>0 &&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                   
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <View input={input} deleteVal={deleteVal}  />
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setInput([])}>LogOut</button>
          </>}
          {input.length < 1 && <div>ViewData</div>}
        </div> */}

    
    
            
        </>
    )
}

export default Login