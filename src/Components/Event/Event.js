import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import EventInformation from './EventInformation';

const Event = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [getRegistrationData, setGetRegistrationData] = useState([]);
    useEffect(()=>{
        fetch('https://protected-refuge-94692.herokuapp.com/getRegisterData?email='+loggedInUser.email)
           
        .then(res => res.json())
        .then(data => setGetRegistrationData(data))
    })
    return (
        <div className="home-image">
            <div>
            <Header></Header>
            </div>

            <div className="row d-flex">
                {
                    getRegistrationData.map(registrationData => <EventInformation registrationData={registrationData}></EventInformation>)
                }
            </div>
        </div>
    );
};

export default Event;