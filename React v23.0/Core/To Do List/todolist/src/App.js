import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            const updatedTasks = [...tasks, { text: newTask, completed: false }];
            setTasks(updatedTasks);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleToggleCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleCompletion(index)}/>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        <button onClick={() => handleRemoveTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
