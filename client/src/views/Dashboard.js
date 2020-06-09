import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';
import NavBar from '../components/NavBar';


// import Moment from 'react-moment';






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

    const removeTask = (e,idx) => {
        e.preventDefault();
        setTasks([
          ...tasks.slice(0,idx),
        ].concat(tasks.slice(idx+1)));
      }

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }


    var dateFormat = require('dateformat');

    return(
        <div>
            <NavBar />
            <div>
            <h1>MY TASKS:</h1>

            
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        To-Do
                        </div>
                        <div class="row">
            <div className = "card" >
            {
                tasks.map((t, idx) => {
                    return  <div key={idx}>
                                <div className= "card-header"> 
                                <Link to={`/task/${t._id}`}>{t.title}</Link><br></br>
                                Do by: {
                                formatDate(t.duedate)
                                }
                                
                                </div>
                                <div className="card-body"> {t.description}</div>
                                <button className="btn btn-light btn-lg active" onClick={(e) => removeTask(e,idx)}>Delete task</button>
                            </div>
                })
            }
            </div>
            </div>

                        <div class="col-sm">
                        Doing
                        </div>
                        <div class="col-sm">
                        Done
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
    );
}
export default Dashboard;