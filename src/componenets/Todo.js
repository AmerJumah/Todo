import React from 'react'
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
const Todo = ({task,completed,removeTodo,toggleTodo}) => {
    return (
        <ListItem>
            <Checkbox checked={completed} onClick={()=> toggleTodo(task)}/>
            <ListItemText style={{textDecoration : completed ? 'line-through' : 'none'}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='delete' onClick={()=>removeTodo(task)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label='edit'>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo
