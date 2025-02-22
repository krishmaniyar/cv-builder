
function DisplayInfo({skill_head="", skill_head_info="", date="", list_of_skills=[], isBlock=false}) {
    return(
        <div className={isBlock ? "skill-info-block" : "skill-info"}>
            <div className="top">
                <div className="skill-head">
                    {skill_head}
                </div>
                <div className="skill-head-info">
                    {skill_head_info}
                </div>
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="list-of-skills">
                <ul>
                    {list_of_skills.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DisplayInfo