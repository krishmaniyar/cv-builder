import InputField from "../InputField.jsx";
import TextArea from "../TextArea.jsx";
import React,{useState, useContext} from "react";
import { Details } from "../../Details.jsx";

function BasicInfo() {

    const { firstName, setFristName, lastName, setLastName, 
            email, setEmail, phoneNumber, setPhoneNumber, linkedin, setLinkedin, 
            title, setTitle, workPlace, setWorkPlace, year, setYear, onGoing, setOnGoing, list, setList } = useContext(Details);

    function handleFirstName(event) {
        setFristName(event.target.value);
        console.log(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="basic-info">
            <h1>Basic Info</h1>
            <hr />
            <form action="" method="get">
                <InputField label="First Name:" type="text" placeholder="Krish" onChangeFunction={handleFirstName} />
                <InputField label="Last Name:" type="text" placeholder="Maniyar" onChangeFunction={handleLastName}/>
                {/* <InputField label="Professional title:" type="text" placeholder="Software Developer" /> */}
                {/* <TextArea /> */}
            </form>
        </div>
    )
}

export default BasicInfo