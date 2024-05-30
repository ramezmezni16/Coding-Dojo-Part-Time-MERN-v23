import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    const addTask = () => {
        if (newTask.trim() !== '') {
            const updatedTasks = [...tasks, { text: newTask, completed: false }];
            setTasks(updatedTasks);
            setNewTask('');
        }
    };
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };
    const toggleCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task"/>

                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>

                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};





<<<<<<< HEAD
export default TodoList;
=======
export default TodoList;
>>>>>>> 1b25d6ffe10ca9f5e8138c8c2e47121f2259ddb7
