import InputField from "../InputField.jsx";
import React, { useState, useContext } from "react";
import { Details } from "../../Details.jsx";
import delete_icon from "../../../assets/delete.svg";

function EducationInfo() {

    const [university, setUniversity] = useState("");
    const [program, setProgram] = useState("");
    const [startingYearEdu, setStartingYearEdu] = useState("");
    const [endingYearEdu, setEndingYearEdu] = useState("");
    const [onGoingEdu, setOnGoingEdu] = useState(false);
    const [eduList, setEduList] = useState([]);

    const {
        educationList, setEducationList
    } = useContext(Details);

    function handleUniversity(event) {
        setUniversity(event.target.value);
        console.log(event.target.value);
    }


    function handleProgram(event) {
        setProgram(event.target.value);
        console.log(event.target.value);
    }


    function handleStartingYearEdu(event) {
        const formattedDate = new Date(Date.now()).toISOString().slice(0, 7);
        setStartingYearEdu(onGoingEdu ? `${event.target.value} to ${formattedDate}` : `${event.target.value}`);
        console.log(event.target.value);
    }

    function handleEndingYearEdu(event) {
        setEndingYearEdu(` to ${event.target.value}`);
        console.log(event.target.value);
    }


    function handleOnGoingEdu() {
        const formattedDate = new Date(Date.now()).toISOString().slice(0, 7);
        setOnGoingEdu(!onGoingEdu);
        setEndingYearEdu(!onGoingEdu ? ` to ${formattedDate}` : ``);
        console.log(!onGoingEdu);
    }

    function skillinputfunction(event) {
        setEduList(event.target.value)
    }

    function addInSkill() {
        setEducationList((prevEducationList) =>
            prevEducationList.map((item, i) =>
                i == educationList.length - 1
                    ? { ...item, eduList: [...item.eduList, eduList] }
                    : item
            )
        );
    }

    function deleteOtherSkills(index) {
        setEducationList((prevEducationList) => prevEducationList.filter((_, i) => i != index))
    }

    const addSkill = {university: `${university}`, program: `${program}`, startingYearEdu: `${startingYearEdu}`, endingYearEdu: `${endingYearEdu}`, onGoingEdu: onGoingEdu, eduList: []}

    function handleOtherSkills() {
        setEducationList((prevEducationList) => [...prevEducationList, addSkill]);
        console.log(educationList)
    }

    return (
        <div className="education-info">
            <h1>Education Background</h1>
            <hr />
            <InputField label="University/Institution/Organization:" type="text" placeholder="Vellore Institute of Technology" onChangeFunction={handleUniversity} />
            <InputField label="Program/Degree/Course:" type="text" placeholder="B.Tech CSE" onChangeFunction={handleProgram} />
            <InputField label="Starting Year:" type="month" placeholder="" onChangeFunction={handleStartingYearEdu} />
            <InputField label="Ending Year:" type="month" placeholder="" onChangeFunction={handleEndingYearEdu} />
            <h1 className="status">On Going:</h1>
            <label class="switch">
                <input type="checkbox" onClick={handleOnGoingEdu} />
                <span class="slider round"></span>
            </label>
            <br />
            <label htmlFor="" className="label-input">Additional info in last education backgound</label>
            <div className="education-add-info">

            </div>
            <input type="text" className="input-field" onChange={skillinputfunction} />
            <div className="right-side">
                <button className="green-button" onClick={addInSkill}>Add</button>
            </div>
            <div className="add-other-info">
                {educationList.map((item, index) => (
                    <div className="list" key={index}>
                        {item.university}
                        <button onClick={() => deleteOtherSkills(index)}>
                            <img src={delete_icon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
            <br />
            <div className="center">
                <button className="blue-button" onClick={handleOtherSkills}>Submit education background</button>
            </div>
        </div>
    )
}

export default EducationInfo