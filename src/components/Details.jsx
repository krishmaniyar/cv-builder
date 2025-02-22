import React, { createContext, useState } from "react";

export const Details = createContext();

export function DetailsProvider({ children }) {
    const [firstName, setFristName] = useState("Krish");
    const [lastName, setLastName] = useState("Maniyar");

    const [email, setEmail] = useState("example@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("+91 6829715394");
    const [linkedin, setLinkedin] = useState("linkedin.sample.com/example");


    const [educationList, setEducationList] = useState([
        {university: "Vellore Institute of Technology", program: "B.Tech CSE Core", startingYearEdu: "", endingYearEdu: "", onGoingEdu: "", eduList: ["flutter", "javascript"]}
    ])

    const [workList, setWorkList] = useState([
        {title: "Software Developer", workPlace: "Start-Up", startingYear: "", endingYear: "", onGoing: "", list: ["frontend", "backend"]}
    ])

    const [technicalSkills, setTechnicalSkills] = useState([
        {head: "Design", list: ["Photoshop","Illustrator","Figma"]},
        {head: "Management", list: ["Time-management", "Communication", "Pressure"]},
    ])

    const [otherSkills, setOtherSkills] = useState([
        {head: "Language", list: ["English","Gujarati","Hindi"]},
    ])

    return (
        <Details.Provider value={{ 
            firstName, setFristName, lastName, setLastName, 
            email, setEmail, phoneNumber, setPhoneNumber, linkedin, setLinkedin, 
            educationList, setEducationList,
            technicalSkills, setTechnicalSkills,
            otherSkills, setOtherSkills, workList, setWorkList
        }}>
            {children}
        </Details.Provider>
    );
}