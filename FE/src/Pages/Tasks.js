import React, {useContext, useState} from 'react';
import Views from '../Components/ViewTasks';
import Form from '../Components/Form';
import {} from '../api/api-helper'

import { DataContext } from "../App";

export default function Task() {
    const [listItems, setListItems] = useState(useContext(DataContext))

    const handleSubmit = item => {
        setListItems([...listItems.allTasks, item])
    }

    const handleUpdateListItem = item => {

    }

    const handleRemoveListItem = item => {
        const listItemsArr = listItems.allTasks.filter((task, index) => {
          return task !== item;
        });

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