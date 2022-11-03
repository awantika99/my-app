import React, {useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {  NavLink } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import Image from './Image'


const Register = () => {
  // const navigate = useNavigate();
    

const[input, setInput] = useState([]);
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');


const handleSubmit = (e) => {

    e.preventDefault();
    let val ={
        name,
        email,
        password
    }
    setInput([...input,val]);
    setName('');
    setEmail('');
    setPassword('');

    var next = JSON.parse(localStorage.getItem('next') || "[]")

    var next1 = 
    {
       input:input
    }
     next.push({input:""})
  
     localStorage.setItem("input",JSON.stringify(input));
    };
    

 useEffect(()=>{
localStorage.setItem("input",JSON.stringify(input));
 },[input])


return (
    <>
 
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
           <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Sign Up</h3>
 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 col-lg-6" >
                         <Form.Control type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" >

                       <Form.Control type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter  Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6">

                        <Form.Control type="password" name='password'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className='col-lg-6'  style={{ background: "blue"}} type="submit">
                            Submit
                        </Button>
                    </Form>
                      <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                </div>
               <Image />
            </section>
          
        </div>
   
    </>
)
}

export default Register