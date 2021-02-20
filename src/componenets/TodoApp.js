import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { AppBar, Grid, Toolbar } from '@material-ui/core'
import TodosList from './TodosList'
import TodoForm from './TodoForm'


const TodoApp = () => {
    const initialTodos = [
       {task:'clean', completed: false},
       {task : 'wash', completed : true}
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodo =>{
        setTodos([...todos,{ task: newTodo , completed: false }])
    }
    const removeTodo = todoId =>{
        const updatedTodos = todos.filter(todo => todo.task !== todoId)
        setTodos(updatedTodos)
    }
    const toggleTodo = todoId =>{
        const updatedTodos = todos.map(todo => todo.task === todoId ? {...todo, completed: !todo.completed} : todo)
        setTodos(updatedTodos)
    }
    return (
        <Paper style={{
            padding:0,
            margin:0,
            height:'100vh',
            backgroundColor:'#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:'64px'}}>
                <Toolbar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </Toolbar>
            </AppBar> 
            <Grid container justify='center' style={{marginTop : '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodosList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                </Grid>
            </Grid>
            
            
        </Paper>
    )
}

export default TodoApp
