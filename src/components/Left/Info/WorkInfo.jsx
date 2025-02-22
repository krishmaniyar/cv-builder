import InputField from "../InputField.jsx";
import React, { useState, useContext } from "react";
import { Details } from "../../Details.jsx";
import delete_icon from "../../../assets/delete.svg";

function WorkInfo() {

    const [title, setTitle] = useState("");
    const [workPlace, setWorkPlace] = useState("");
    const [startingYear, setStartingYear] = useState("");
    const [endingYear, setEndingYear] = useState("");
    const [onGoing, setOnGoing] = useState(false);
    const [list, setList] = useState([]);

    const { workList, setWorkList } = useContext(Details);

    function handleTitle(event) {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    function handleWorkPlace(event) {
        setWorkPlace(event.target.value);
        console.log(event.target.value);
    }

    function handleStartingYear(event) {
        const formattedDate = new Date(Date.now()).toISOString().slice(0, 7);
        setStartingYear(onGoing ? `${event.target.value} to ${formattedDate}` : `${event.target.value}`);
        console.log(event.target.value);
    }

    function handleEndingYear(event) {
        setEndingYear(` to ${event.target.value}`);
        console.log(event.target.value);
    }

    function handleOnGoing() {
        const formattedDate = new Date(Date.now()).toISOString().slice(0, 7);
        setOnGoing(!onGoing);
        setEndingYear(!onGoing ? ` to ${formattedDate}` : ``);
        console.log(!onGoing);
    }

    function skillinputfunction(event) {
        setList(event.target.value)
    }

    function addInSkill() {
        setWorkList((prevWorkList) =>
            prevWorkList.map((item, i) =>
                i == workList.length - 1
                    ? { ...item, list: [...item.list, list] }
                    : item
            )
        );
    }

    function deleteOtherSkills(index) {
        setWorkList((prevWorkList) => prevWorkList.filter((_, i) => i != index))
    }

    const addSkill = {title: `${title}`, workPlace: `${workPlace}`, startingYear: `${startingYear}`, endingYear: `${endingYear}`, onGoing: {onGoing}, list: []}

    function handleOtherSkills() {
        setWorkList((prevWorkList) => [...prevWorkList, addSkill]);
        console.log(workList)
    }

    return (
        <div className="work-info">
            <h1>Work Experience</h1>
            <hr />
            <InputField label="Title/Position:" type="text" placeholder="Senior Software Developer" onChangeFunction={handleTitle} />
            <InputField label="Workplace/Company/Organization:" type="text" placeholder="Company Inc." onChangeFunction={handleWorkPlace} />
            <InputField label="Starting Year:" type="month" placeholder="" onChangeFunction={handleStartingYear} />
            <InputField label="Ending Year:" type="month" placeholder="" onChangeFunction={handleEndingYear} />
            <h1 className="status">On Going:</h1>
            <label class="switch">
                <input type="checkbox" onClick={handleOnGoing} />
                <span class="slider round"></span>
            </label>
            <br />
            <label htmlFor="" className="label-input">List your job responsibilities</label>
            <div className="responsibilities-add-info">

            </div>
            <input type="text" className="input-field" onChange={skillinputfunction} />
            <div className="right-side">
                <button className="green-button" onClick={addInSkill}>Add</button>
            </div>
            <div className="add-other-info">
                {workList.map((item, index) => (
                    <div className="list" key={index}>
                        {item.title}
                        <button onClick={() => deleteOtherSkills(index)}>
                            <img src={delete_icon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
            <br />
            <div className="center">
                <button className="blue-button" onClick={handleOtherSkills}>Submit work experience</button>
            </div>
        </div>
    )
}

export default WorkInfo