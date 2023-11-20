"use client"
import { useState } from "react";


import LandingForm from "../components/LandingForm";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import {getRequest} from '../components/http/http'



export default function Login() {


const [showLanding, setShowLanding] = useState(true);
const [emailExists, setEmailExists] = useState(false);


async function validateEmail(email:any){
console.log(email);
let response = await getRequest(`users/validateEmail?email=${email}`)
console.log(response);
return;

setShowLanding(false);
setEmailExists(false);


}
    return ( 

       
        <div>
             {(showLanding)? <LandingForm validateEmail = {validateEmail} /> : emailExists ? <LoginForm /> : <SignUpForm/>}
            
        </div>
    )
}
