import { Button, FormControl } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import HomeInformation from '../HomeInformation/HomeInformation';
import './Home.css';

const Home = () => {
    const [volunteerActivity, setVolunteerActivity] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/loadVolunteerActivity')
            .then(res => res.json())
            .then(data => setVolunteerActivity(data))

        
    }, [])
    return (
        <div className="home-image">
            <div>
                <Header></Header>
            </div>
            <br/>
            <div >
            <h3 className="d-flex justify-content-center" style={{fontWeight:'bold'}}>I GROW BY HELPING PEOPLE IN NEED.</h3>
             <Form inline className="d-flex justify-content-center">
                <input type="search" name="search" id="" placeholder="search"/>
                {/* <FormControl style={{backgroundColor:'white'}} type="search" placeholder="Search"/> */}
                <Button style={{backgroundColor:'#007bff', color:'white'}} type="submit">Search</Button>
             
            </Form>
         </div>
           <br/>
           
            <div className="row d-flex" style={{margin:'80px'}}> 
                {
                    volunteerActivity.map(activity => <HomeInformation activity={activity}></HomeInformation>)
                }
            </div>
        </div>
    );
};

export default Home;