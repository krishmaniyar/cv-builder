import InputField from "../InputField.jsx";
import React,{useState, useContext} from "react";
import { Details } from "../../Details.jsx";

function ContactInfo() {

    const { firstName, setFristName, lastName, setLastName, 
            email, setEmail, phoneNumber, setPhoneNumber, linkedin, setLinkedin, 
            title, setTitle, workPlace, setWorkPlace, year, setYear, onGoing, setOnGoing, list, setList } = useContext(Details);

    function handleEmail(event) {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value);
        console.log(event.target.value);
    }

    function handleLinkedin(event) {
        setLinkedin(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="contact-info">
            <h1>Contact Info</h1>
            <hr />
            <InputField label="Email:" type="email" placeholder="example@gmail.com" onChangeFunction={handleEmail}/>
            <InputField label="Phone Number:" type="text" placeholder="" onChangeFunction={handlePhoneNumber}/>
            {/* <InputField label="Location:" type="text" placeholder="Mumbai, Maharashtra" /> */}
            <InputField label="Website:" type="text" placeholder="linkedin.sample.com/example" onChangeFunction={handleLinkedin}/>
        </div>
    )
}

export default ContactInfo