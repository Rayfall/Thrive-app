import React, { useContext } from "react";

import { DataContext } from "../App";

export default function Secret() {
    const data = useContext(DataContext);
    let message = data;

    if(message == null){
        message = "loading..."
    }
    
    return (
        <div>
          <h1>Secret</h1>
          <p>Working on it..</p>
        </div>
    );

}