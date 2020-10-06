import React, { useContext } from 'react';
import logos2 from '../../logos2/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import Header from '../Header/Header';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  //firebase app name duplicate jeno na hoi tai  if used.
    }

    //google signin

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { isSignedIn: 'true', name: displayName, email: email } //result.user theke displayname and email ke alada variable a rakhlam
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(signedInUser);

        }).catch(function (error) {

            const errorMessage = error.message;

            const email = error.email;
            console.log(errorMessage, email);

        });
    }

    return (
        <div className="home-image">
            <div>
                <Header></Header>
            </div>

            <div class="card text-center" style={{width: '500px',height:'150px', marginLeft:'450px', marginTop:'150px', borderRadius:'5px'}}>
                <div class="card-body">
                    <h5 class="card-title">Login With</h5>
                    <button style={{width:'300px', height:'30px', borderRadius:'10px', fontWeight:'450'}} onClick={handleGoogleSignIn}>
                         <img style={{width:'20px', marginRight:'100px'}} src={logos2} alt=""/> <span style={{marginRight:'5px'}}>Continue With Google</span> 
                    </button>
                    
                    <p class="card-text">Don't have any account? <a href="#">Create an account</a></p>
                </div>
            </div>

        </div>


    );
};

export default Login;