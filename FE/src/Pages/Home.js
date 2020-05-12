import React, {useContext} from 'react';

import { DataContext } from "../App";

export default function Home() {
    const data = useContext(DataContext);
    let tasks = data.allTasks.map((task,index)=>{
        let items = task.items.map((item,index) => {
            let subitems = item.subtasks.map((task,index)=> {
                return <li key={index}>{task.subtask}</li>
            })
            return (
                <li key={index}>{item.item}
                    <ul>{subitems}</ul>
                </li>)
        })
        return (
            <h3 key={index}>{task.title}
                <ul>{items}</ul>
            </h3>
        );
    });
    //console.log(tasks.allTasks[0]);
    return (
    <>
       <h1>Home Page</h1>
       {tasks}
    </>
    );
}