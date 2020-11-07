import { FormGroup } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logos from '../../logos/Group 1329.png';
import Header from '../Header/Header';
import './Registration.css';


const Registration = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { volunteerId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    const [volunteerActivity2, setVolunteerActivity2] = useState([]);

    const history = useHistory();


    useEffect(() => {
        fetch('https://protected-refuge-94692.herokuapp.com/loadVolunteerActivity')
            .then(res => res.json())
            .then(data => setVolunteerActivity2(data))
    }, [])

    const volunteerData = volunteerActivity2.find(activity => activity.id === volunteerId) || {};
    console.log(volunteerData);
    
    const onSubmit = data => {
        const formData = {...data};
        fetch('https://protected-refuge-94692.herokuapp.com/addRegisterData',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
           
                history.push('/event');
            
        }
        //console.log(data);
      })

    }

    //
    


    return (
        
         <div className="home-image">
             <Header></Header>
        
        <div className="justify-content-center">
             
            <div>
                <img style={{width:'300px', marginLeft:'550px'}} src={logos} alt="" />
            </div>
            <br/>
            <br/>
        {/* register data send to server then server  will send to database */}
            <div >
        

            <form style={{marginLeft:'550px',backgroundColor:'white',height:'400px', width:'400px', borderRadius:"10px", boxShadow:'8px 8px 8px gray'}} onSubmit={handleSubmit(onSubmit)}>
       
        <input style={{marginLeft:'90px',width:'200px', marginTop:'40px'}} type="text" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
         {errors.name && <span className="error">Name is required</span>}
         <br/>
         <br/>
        
         <input style={{marginLeft:'90px',width:'200px'}} type="text" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='Your Email'/>
         {errors.name && <span className="error">Email is required</span>}
         <br/>
         <br/>
         
         <input style={{marginLeft:'90px',width:'200px'}} name="description" type="text" ref={register({ required: true })} placeholder='Description'/>
         {errors.name && <span className="error">Address is required</span>}
         <br/>
         <br/>
        
         <input style={{marginLeft:'90px',width:'200px'}} name="date" type="date" ref={register({ required: true })} placeholder='Date'/>
         {errors.name && <span className="error">Phone Number is required</span>}
         <br/>
         <br/>
        
         <input style={{marginLeft:'90px',width:'200px'}} name="organization" type="text" defaultValue={volunteerData.title} ref={register({ required: true })} placeholder='organization name'/>
         {errors.name && <span className="error">Phone Number is required</span>}
         <br/>
         <br/>
       <input className="submit-button" style={{marginLeft:'90px',width:'200px'}} type="submit" /> 
      </form>

            </div>

        </div>

        </div>  
    );
    }

export default Registration;