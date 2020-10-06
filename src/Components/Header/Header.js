import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logos from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div>
            <Navbar bg="none" >
           <Navbar.Brand href="#home" style={{marginLeft:'140px'}}>
                
                    <img style={{width: '200px'}}
                        src={logos}
                        
                        alt="React Bootstrap logo"
                    />
             </Navbar.Brand >   
                   
                <Nav className="header" >
                 <Link to="/home">  <Nav.Link style={{marginLeft:'270px', color:'black'}}  href="#home">Home</Nav.Link></Link> 
                 <Link to="/donation">   <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#donation">Donation</Nav.Link> </Link> 
                <Link to="/event">   <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#events">Events</Nav.Link></Link> 
                 <Link to="/blog">  <Nav.Link style={{marginLeft:'20px', color:'black'}}  href="#blog">Blog</Nav.Link></Link> 
               
                <Link to="/login"> 

                <Button style={{marginLeft:'20px', width:'100px', height:'40px', borderRadius:'10px'}} variant="primary">
                    {loggedInUser.email ? loggedInUser.name : 'Register'}
                </Button>

                </Link>

                 
                  <Link to="admin">  <Button style={{marginLeft:'20px', width:'100px', height:'40px', borderRadius:'10px'}} variant="dark">Admin</Button></Link>
                </Nav>
               
            </Navbar>
            </div>
           

       


        </div>
    );
};

export default Header;