import React from "react";
import './ProjectName.css'

const fname = "React";
const lname = ".js";

function ProjectName() {
    return (
        <h1 className='heading1'>Todo Application with {fname + lname}</h1>
    )
}

export default ProjectName