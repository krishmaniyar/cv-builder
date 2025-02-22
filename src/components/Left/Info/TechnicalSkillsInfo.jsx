import React, { useState, useContext } from "react";
import { Details } from "../../Details.jsx";
import InputField from "../InputField.jsx";
import delete_icon from "../../../assets/delete.svg";

function TechnicalSkillsInfo() {
    const [newHead, setHead] = useState("");
    const addSkill = { head: `${newHead}`, list: [] }

    function handleHead(event) {
        setHead(event.target.value)
    }

    const {
        firstName, setFristName, lastName, setLastName,
        email, setEmail, phoneNumber, setPhoneNumber, linkedin, setLinkedin,
        university, setUniversity, program, setProgram, yearEdu, setYearEdu, onGoingEdu, setOnGoingEdu, gpa, setGpa, eduList, setEduList,
        title, setTitle, workPlace, setWorkPlace, year, setYear, onGoing, setOnGoing, list, setList, setTechnicalSkills, technicalSkills
    } = useContext(Details);

    function handleTechnicalSkills() {
        setTechnicalSkills((prevTechnicalSkills) => [...prevTechnicalSkills, addSkill]);
        console.log(technicalSkills)
    }

    function deleteTechnicalSkills(index) {
        setTechnicalSkills((prevTechnicalSkills) => prevTechnicalSkills.filter((_, i) => i != index))
    }

    const [skillInput, setSkillInput] = useState("");

    function skillinputfunction(event) {
        setSkillInput(event.target.value)
    }

    function addInSkill() {
        setTechnicalSkills((prevTechnicalSkills) =>
            prevTechnicalSkills.map((item, i) =>
              i == technicalSkills.length - 1
                ? { ...item, list: [...item.list, skillInput] }
                : item
            )
        );
    }

    return (
        <div className="technical-skills">
            <h1>Technical Skills</h1>
            <hr />
            <p>Showcase the most relevant skills applicable to the job you're applying for</p>
            <InputField label="Add a skill category" type="text" placeholder="Design" onChangeFunction={handleHead} />
            <div className="right-side">
                <button className="green-button" onClick={handleTechnicalSkills}>Add</button>
            </div>
            <InputField label="Add a skill" type="text" placeholder="figma" onChangeFunction={skillinputfunction} />
            <div className="right-side">
                <button className="green-button" onClick={addInSkill}>Add</button>
            </div>
            <div className="technical-skills-info">
                {technicalSkills.map((item, index) => (
                    <div className="list" key={index}>
                        {item.head}
                        <button onClick={() => deleteTechnicalSkills(index)}>
                            <img src={delete_icon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
            <br />
            {/* <div className="center">
                <button className="blue-button">Submit skill info</button>
            </div> */}
        </div>
    )
}

export default TechnicalSkillsInfo