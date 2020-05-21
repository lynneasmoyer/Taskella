import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';
import TaskForm from '../components/TaskForm';
import NavBar from '../components/NavBar';


const AddTask = (props) => {
    const [newTask, setNewTask] = useState({
        title: "",
        duedate: "",
        description: ""
    })

    const [errors, setErrors] = useState({
        title: "",
        duedate: "",
        description: ""
    })

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/tasks')
            .then(res => {
                setTasks(res.data)
            });
    }, [isSubmitted]);

    const handleChange =(e) => {
        e.preventDefault();
        setNewTask({
            ...newTask,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/task', newTask)
            .then(res => {
                setNewTask({
                    title: "",
                    duedate: "",
                    description:""
                });
                setErrors({
                    title: "",
                    duedate: "",
                    description:"" 
                });
                setIsSubmitted(!isSubmitted);
            })
            .catch(err => setErrors(err.response.data))
    }

    return(
        <div>
            <NavBar />
            <div className="form">
            <h1>ADD A TASK:</h1>
                <TaskForm
                    form={newTask}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />
            </div>
        </div>
    );
}
export default AddTask;

