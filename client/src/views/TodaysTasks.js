import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';

import NavBar from '../components/NavBar';



const TodaysTasks = (props) => {
    
    const [tasks, setTasks] = useState([]);


    


    useEffect(() => {
        Axios.get('http://localhost:8000/api/tasks')
            .then(res => {
                setTasks(res.data)
            });
    });

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    let date = new Date();
    let today = formatDate(date)
 
    const filteredTasks = tasks.filter(task => formatDate(task.duedate) === today)


    
    


    return(
        <div>
            <NavBar />
            <div>
            <h1>TODAY'S TASKS:</h1>
          
            {
                filteredTasks.map((t, idx) => {
                    return  <div key={idx} className = "card">
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
        
    );
}
export default TodaysTasks;

