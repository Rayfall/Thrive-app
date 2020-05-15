import React, { useState } from "react";
import Tasks from './HandleTaskChange';

import { DataContext } from "../App";

export default function ViewTasks(props) {
    const data = props.listItems;
    console.log(data);
    if(data == null){
        return (
            <div>
               <Tasks/>
            </div>
        )
    }
    else {
        let tasks = data.map((task, index)=>{
            console.log("This task: ", task)
            return (
                <Tasks handleRemoveListItem={() => props.handleRemoveListItem(task)} task={task} key={index} />
            )
        });
        return (
        <div>
           {tasks}
        </div>
        );
    }
}

/**
 * if(task.items == null){
                return <h2 key={index}>{task.title}</h2>;
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
                    <h2 key={index}>{task.title}
                        <ul>{items}</ul>
                    </h2>
                );
            }        
 */