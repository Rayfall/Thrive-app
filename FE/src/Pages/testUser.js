import React, {useState, useEffect} from 'react';
import './Styles/testuser.css'

import { getUserInfo, getAllUsers } from '../api/api-helper';

export default function DefaultUser() {
    const [user, setUser] = useState();
    const userid = "5ebe1921b3646ba12daccea7";

    useEffect(() => {
        const makeUserCall = async () => {
          const resp = await getUserInfo(userid);
          setUser(resp);
        }
        makeUserCall();
    }, []);

    console.log(user);

    return (
        <div className="user-body">
            <h2>User Info</h2>
            <img className="login-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589492993/Thrive/user_nh52qw.png" alt="Login Logo"></img>
            <ul className="user-list">
                <li>First Name: Test</li>
                <li>Last Name: User</li>
                <li>Email: myTestEmail@gmail.com</li>
                <li>Password: ***</li>
            </ul>
            <a href="">Settings</a>
        </div>
        
    )

}