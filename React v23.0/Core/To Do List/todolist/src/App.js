import React, { useState, useEffect } from 'react';

const TodoList = () => {
    // Initialize state for tasks and new task input
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Function to handle adding a new task
    const addTask = () => {
        if (newTask.trim() !== '') {
            const updatedTasks = [...tasks, { text: newTask, completed: false }];
            setTasks(updatedTasks);
            setNewTask('');
        }
    };

    // Function to handle removing a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Function to handle toggling the completion status of a task
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
                {/* Input field to add new task */}
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                {/* Button to add new task */}
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {/* Map over tasks and render each task */}
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        {/* Button to remove task */}
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
