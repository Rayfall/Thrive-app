import React, {useContext} from 'react';
import './Styles/testgroup.css';


export default function TestGroups() {
    return (
    <>
        <h1>Groups Page</h1>
        <ul classList="group-list">
            <li className="list-item">Group Alpha <span><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589557645/Thrive/addTask_pfqska.png" alt="Add Group"></img><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589561719/Thrive/Group_3_h7z4ta.png" alt="Remove Group"></img></span></li>
            <li className="list-item">Laughing Grass Games<span><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589557645/Thrive/addTask_pfqska.png" alt="Add Group"></img></span><span><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589561719/Thrive/Group_3_h7z4ta.png" alt="Remove Group"></img></span></li>
            <li className="list-item">Honey Drop Games<span><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589557645/Thrive/addTask_pfqska.png" alt="Add Group"></img></span><span><img className="group-button" src="https://res.cloudinary.com/aetherfall/image/upload/v1589561719/Thrive/Group_3_h7z4ta.png" alt="Remove Group"></img></span></li>
        </ul>
    </>
    )
}