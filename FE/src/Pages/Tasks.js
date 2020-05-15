import React, {useContext, useState, useEffect} from 'react';
import Views from '../Components/ViewTasks';
import Form from '../Components/Form';
import { deleteTask, updateTask, createTask } from '../api/api-helper'

import { DataContext } from "../App";

export default function Task() {
    const [listItems, setListItems] = useState(useContext(DataContext))
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        if(itemData && itemData.length) {
            handleCreateTask(itemData);
        }
    },[itemData]);

    const handleSubmit = title => {
        setItemData([{title}]);
        handleCreateTask();
    }

    const handleCreateTask = async () => {
        const json = await createTask(itemData);
    }

    const handleDeleteTask = async () => {
        const json = await deleteTask(itemData);
    }

    const handleUpdateListItem = item => {

    }

    const handleRemoveListItem = item => {
        const listItemsArr = listItems.allTasks.filter((task, index) => {
          return task !== item;
        });
        handleDeleteTask(item);
        setListItems(listItemsArr);
    }
    console.log(listItems.allTasks)

    return(
        <div>
            <h1>Task Page</h1>
            <Form handleSubmitFromApp={handleSubmit} placeholderText={'Add A New Task...'}/>
            <Views handleRemoveListItem={handleRemoveListItem} listItems={listItems.allTasks}/>
        </div>
    )
}