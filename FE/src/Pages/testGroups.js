import React, {useContext} from 'react';
import './Styles/testgroup.css';


export default function TestGroups() {
    return (
    <>
        <h1>Groups Page</h1>
        <ul>
            <li>Group Alpha <span><button className="group-button"><img src="https://res.cloudinary.com/aetherfall/image/upload/v1589557645/Thrive/addTask_pfqska.png" alt="Add Group"></img></button></span><span><button className="group-button"><img src="https://res.cloudinary.com/aetherfall/image/upload/v1589557645/Thrive/close_bhcckt.png" alt="Remove Group"></img></button></span></li>
        </ul>
    </>
    )
}