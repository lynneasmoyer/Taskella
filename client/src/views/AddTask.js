import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import TaskForm from '../components/TaskForm';
import NavBar from '../components/NavBar';
import desktop from '../images/desktop.png';


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
                    <div class="carousel-item active">
                        <img src={desktop} class="d-block w-100" alt="..."></img>
                    </div>
            <br></br>
            <div className="card" style= {{ width: "26rem", margin: "auto" }} >
                <div className="card-header">
                    ADD A TASK:
                </div>
                    <div className= "card-body">
                    <TaskForm
                        form={newTask}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                    </div>
                </div>
            </div>
        
    );
}
export default AddTask;

