import "./Right.css";
import email_icon from "./icons/email.svg";
import phone_icon from "./icons/phone.svg";
import location_icon from "./icons/location.svg";
import Heading from "./Heading";
import link_icon from "./icons/link.svg";
import DisplayInfo from "./DisplayInfo";
import React, { useContext, useState } from "react";
import { Details } from "../Details";
import html2canvas from "html2canvas";
import printer_icon from "../../assets/printer.svg"


function Right() {

    const {
        firstName, setFristName, lastName, setLastName,
        email, setEmail, phoneNumber, setPhoneNumber, linkedin, setLinkedin,
        university, setUniversity, program, setProgram, startingYearEdu, endingYearEdu, onGoingEdu, setOnGoingEdu, gpa, setGpa, eduList, setEduList,
        title, setTitle, workPlace, setWorkPlace, endingYear, setEndingYear, startingYear, setStartingYear, setYear, onGoing, setOnGoing, list, setList, technicalSkills, setTechnicalSkills,
        otherSkills, setOtherSkills, workList, educationList, 
    } = useContext(Details);

    const handlePrint = () => {
        const element = document.querySelector(".cv-container");
    
        html2canvas(element, {
          scale: 2, // Ensures high quality
          backgroundColor: null, // Preserves transparency
          useCORS: true // Fixes cross-origin issues
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
    
          const printWindow = window.open("", "_blank");
          printWindow.document.write(`<img src="${imgData}" style="width:100%;height:auto;">`);
          printWindow.document.close();
    
          // **Wait until the image is loaded before printing**
          printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
          };
        });
      };


    return (
        <div className="right">
            <div className="cv-container" id="cv-container">
                <div className="part-1">
                    <h1>{firstName} {lastName}</h1>
                    <div className="contact-details">
                        <div className="mail">
                            <img src={email_icon} alt="" />
                            {email}
                        </div>
                        <div className="phone-number">
                            <img src={phone_icon} alt="" />
                            {phoneNumber}
                        </div>
                        {/* <div className="location">
                            <img src={location_icon} alt="" />
                            Mumbai, Maharashtra
                        </div> */}
                        <div className="linkedin">
                            <img src={link_icon} alt="" />
                            {linkedin}
                        </div>
                    </div>
                </div>
                <div className="part-2">

                    {(educationList.length == 0) ? <></> :
                        <>
                            <Heading title="Education" />
                            {educationList.map((item, index) => (
                                <DisplayInfo skill_head={item.university} skill_head_info={item.program} date={`${item.startingYearEdu}${item.endingYearEdu}`}
                                    list_of_skills={item.eduList} key={index} />
                            ))}
                        </>
                    }

                    {(workList.length == 0) ? <></> :
                        <>
                            <Heading title="Work Experience" />
                            {workList.map((item, index) => (
                                <DisplayInfo skill_head={item.title} skill_head_info={item.workPlace} date={`${item.startingYear}${item.endingYear}`}
                                    list_of_skills={item.list} key={index} />
                            ))}
                        </>
                    }

                    {(technicalSkills.length == 0) ? <></> :
                        <>
                            <Heading title="Technical Skills" />
                            <div className="blocks">
                                {technicalSkills.map((item, index) => (
                                    <DisplayInfo skill_head={item.head} skill_head_info="" date=""
                                        list_of_skills={item.list} isBlock={true} key={index} />
                                ))}
                            </div>
                        </>
                    }

                    {(otherSkills.length == 0) ? <></> :
                        <>
                            <Heading title="Other Info" />
                            <div className="blocks">
                                {otherSkills.map((item, index) => (
                                    <DisplayInfo skill_head={item.head} skill_head_info="" date=""
                                        list_of_skills={item.list} isBlock={true} key={index} />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
            <button onClick={handlePrint} className="print-button">
                <img src={printer_icon} alt="" />
            </button>
        </div>
    )
}

export default Right