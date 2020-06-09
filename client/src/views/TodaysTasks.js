import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';
import TaskForm from '../components/TaskForm';
import NavBar from '../components/NavBar';



const TodaysTasks = (props) => {
    
    const [todaysTasks, setTodaysTasks] = useState([]);


    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    useEffect(() => {
        Axios.get('http://localhost:8000/api/tasks')
            .then(res => {
                setTodaysTasks(res.data)
            });
    });

    const filteredTasks = todaysTasks.filter(task => task.duedate == today)

    
    
    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    return(
        <div>
            <NavBar />
            <div>
            <h1>TODAY'S TASKS:</h1>
            <div className = "card" >
            {
                filteredTasks.map((t, idx) => {
                    return  <div key={idx}>
                                <div className= "card-header"> 
                                <Link to={`/task/${t._id}`}>{t.title}</Link><br></br>
                                Do by: {
                                formatDate(t.duedate)
                                }
                                
                                </div>
                                <div className="card-body"> {t.description}</div>
                               
                            </div>
                })
            }
            </div>


            </div>
        </div>
        
    );
}
export default TodaysTasks;

