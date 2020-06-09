import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Link } from '@reach/router';
import NavBar from '../components/NavBar';









const Dashboard = (props) => {




    const [isSubmitted] = useState(false);
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
            
            {
                tasks.map((t, idx) => {
                    return  <div key={idx} className = "card" >
                                <div className= "card-header"> 
                                Do by: {
                                formatDate(t.duedate)
                                }
                                <br></br>
                                <Link to={`/task/${t._id}`}>{t.title}</Link>
                                </div>
                                <div className="card-body"> {t.description}</div>
                                <button className="btn btn-light btn-sm active" onClick={(e) => removeTask(e,idx)}>Delete task</button>
                                
                                </div>
                            
                            
                })
            }
            
            
        
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