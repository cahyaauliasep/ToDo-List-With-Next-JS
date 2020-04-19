import { useState } from 'react';

export default () => {
    const [todos, setTodos] = useState(['todo 1','todo 2']);
    const [todo, setTodo] = useState('');
    const removeTodo = todo => {
        setTodos(todos.filter(t => t != todo));
    };
    return (
        <>
        <h2>ToDo List</h2>
        <input value={todo}  onChange={e => setTodo(e.target.value)} />
        <button onClick = {() => setTodos([... todos, todo])}>Add</button>  
        {todos.map((todo, index) => (
            <>
            <h4>{todo}</h4>
            <button onClick = {() => removeTodo(todo)}>Remove</button>  
            </>
        ))}
        </>
    );
};