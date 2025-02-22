import React, { useState, useContext } from "react";
import { Details } from "../../Details.jsx";
import InputField from "../InputField.jsx";
import delete_icon from "../../../assets/delete.svg";

function OtherInfo() {
    const [newHead, setHead] = useState("");
    const addSkill = { head: `${newHead}`, list: [] }

    function handleHead(event) {
        setHead(event.target.value)
    }

    const {
        otherSkills, setOtherSkills
    } = useContext(Details);

    function handleOtherSkills() {
        setOtherSkills((prevOtherSkills) => [...prevOtherSkills, addSkill]);
        console.log(otherSkills)
    }

    function deleteOtherSkills(index) {
        setOtherSkills((prevOtherSkills) => prevOtherSkills.filter((_, i) => i != index))
    }

    const [skillInput, setSkillInput] = useState("");

    function skillinputfunction(event) {
        setSkillInput(event.target.value)
    }

    function addInSkill() {
        setOtherSkills((prevOtherSkills) =>
            prevOtherSkills.map((item, i) =>
                i == otherSkills.length - 1
                    ? { ...item, list: [...item.list, skillInput] }
                    : item
            )
        );
    }

    return (
        <div className="other-info">
            <h1>Other Info</h1>
            <hr />
            <p>Only fill this out if it's important to the job you're applying for or if your CV still has space in the preview</p>
            <InputField label="Add a category (ex. Languages/Awards)" type="text" placeholder="Language" onChangeFunction={handleHead} />
            <div className="right-side">
                <button className="green-button" onClick={handleOtherSkills}>Add</button>
            </div>
            <InputField label="Add a description" type="text" placeholder="English" onChangeFunction={skillinputfunction} />
            <div className="right-side">
                <button className="green-button" onClick={addInSkill}>Add</button>
            </div>
            <div className="add-other-info">
                {otherSkills.map((item, index) => (
                    <div className="list" key={index}>
                        {item.head}
                        <button onClick={() => deleteOtherSkills(index)}>
                            <img src={delete_icon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherInfo