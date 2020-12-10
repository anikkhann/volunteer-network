import { Table } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
//import fakeData from '../../fakeData/index';

const Admin = () => {
    //console.log(fakeData);
    // const handleFakeData = () => {
    //     //    fetch('https://protected-refuge-94692.herokuapp.com/addVolunteerActivity', {
    //     //        method:'POST',
    //     //        headers:{'Content-Type': 'application/json'},
    //     //        body: JSON.stringify(fakeData)

    //     //    })
    //     //    .then(res=> res.json())
    //     //    .then(data => console.log(data))
    // }
    const [allVolunteerData, setAllVolunteerData] = useState([]);
    useEffect(() => {

        fetch('https://protected-refuge-94692.herokuapp.com/getAllRegisterData')
            .then(res => res.json())
            .then(data => setAllVolunteerData(data))
    }, [])

    return (
        <div className="home-image">
            {/* <button onClick={handleFakeData}>Add All fake data to mongodb</button> */}
            <div>
                <Header></Header>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Volunteer List</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allVolunteerData.map(volunteerData => 
                    <tr>
                      
                        <td>{volunteerData.name}</td>
                        <td>{volunteerData.email}</td>
                        <td>{volunteerData.date}</td>
                        <td>{volunteerData.organization}</td>
                    </tr>
                )}
                   
                </tbody>
            </table>
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registating Date</th>
                        <th>Volunteer list</th>
                        

                    </tr>
                </thead>
                <tbody>
                    <tr>
                       
                         <td>{allVolunteerData.name}</td>
                         <td>{allVolunteerData.email}</td>
                         <td>{allVolunteerData.date}</td>
                         <th>{allVolunteerData.description}</th>
                        
                    </tr>
                    
                </tbody>
            </Table> */}
        </div>
    );
};

export default Admin;