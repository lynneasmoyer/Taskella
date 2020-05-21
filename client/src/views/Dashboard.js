import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';
import NavBar from '../components/NavBar';

import desk from "../images/desk.png";



const Dashboard = (props) => {
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



    return(
        <div>
            <NavBar />
            <h1>MY TASKS:</h1>
            {
                tasks.map((t, idx) => {
                    return  <div key={idx}>
                                <Link to={`/task/${t._id}`}>{t.title}</Link><br></br>
                            </div>
                })
            }

        </div>
        
    );
}
export default Dashboard;