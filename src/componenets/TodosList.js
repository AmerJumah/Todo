import { Divider, List } from '@material-ui/core'
import  Paper  from '@material-ui/core/Paper'
import React from 'react'
import Todo from './Todo'


const TodosList = (props) => {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <>
                 <Todo
                  task={todo.task} key={todo.task}
                  completed={todo.completed}
                  removeTodo={props.removeTodo}
                  toggleTodo={props.toggleTodo}
                  />   
                <Divider />
                </>
            ))}
            </List>
        </Paper>
    )
}

export default TodosList
