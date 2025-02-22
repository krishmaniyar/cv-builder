import "./Left.css";
import OtherInfo from "./Info/OtherInfo.jsx";
import TechnicalSkillsInfo from "./Info/TechnicalSkillsInfo.jsx";
import WorkInfo from "./Info/WorkInfo.jsx";
import EducationInfo from "./Info/EducationInfo.jsx";
import ContactInfo from "./Info/ContactInfo.jsx";
import BasicInfo from "./Info/BasicInfo.jsx";

function Left() {

    return (
        <div className="left">
            <h1 className="heading">CV Generator</h1>
            <div className="information">
                Create your CV by filling out the forms below! Your CV will be dynamically updated in the preview.
            </div>
            <div className="git-link">
                <a href="https://github.com/krishmaniyar" target="blank">Check out the Github repo for this project here</a>
            </div>
            <div className="get-info">
                <BasicInfo />
                <ContactInfo />
                <EducationInfo />
                <WorkInfo />
                <TechnicalSkillsInfo />
                <OtherInfo />
            </div>
            <div className="footer">
                &copy; KBM 2025
            </div>
        </div>
    )
}

export default Left