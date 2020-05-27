import React from 'react';
import { Router } from "@reach/router";
import { Link } from '@reach/router';



const TaskCard = (task, removeTask) => {

    const style = {
        color: '#aca18c'
    }
    return (
        <div className="card">
            <h5 className= "card-header">
                To-do by: {taskDue}
            </h5>
            <div class = "card-body">
                <li className={task.isComplete ? 'list-group-item disabled': 'list-group-item'} onClick={(e) => handleCheck(e,idx)} >{task.task}</li>
                <input className="form-check-input" type="checkbox" checked={task.isComplete} onClick={(e) => handleCheck(e,idx)} readOnly/>
                <label className="form-check-label" >Doing?</label>
                <br></br>
                <button className="btn btn-light btn-lg active" onClick={(e) => removeTask(e,idx)}>I did this!</button>
            </div>
        </div>
    )
}
export default TaskCard;