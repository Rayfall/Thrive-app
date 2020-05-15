import React, {useContext} from 'react';

import { DataContext } from "../App";

export default function Task() {
    const data = useContext(DataContext);
    console.log(data)
    if(data.allTasks == null){
        return (
            <>
               <h1>Task Page</h1>
            </>
        )
    }
    else {
        let tasks = data.allTasks.map((task,index)=>{
            if(task.items == null){
                return <h3 key={index}>{task.title}</h3>;
            } else {
                let items = task.items.map((item,index) => {
                    if(item.subtasks == null){
                        return <li key={index}>{item.item}</li>
                    } else {
                        let subitems = item.subtasks.map((task,index)=> {
                            return <li key={index}>{task.subtask}</li>
                        })
                        return (
                            <li key={index}>{item.item}
                                <ul>{subitems}</ul>
                            </li>
                        )
                    }
                })
                return (
                    <h3 key={index}>{task.title}
                        <ul>{items}</ul>
                    </h3>
                );
            }        
        });
        return (
        <>
           <h1>Task Page</h1>
           {tasks}
        </>
        );
    }

}