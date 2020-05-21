import React from 'react';
import { Router } from "@reach/router";
import { Link } from '@reach/router';



const NavBar = () => {

    const style = {
        color: '#aca18c'
    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style}>
                <a className="navbar-brand" href="/"  style={style} >TASKELLA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={style} >
                    <li className="nav-item active">
                    <Link  className="nav-link" to="/tasks" style={style} >Dashboard<span className="sr-only">(current)</span></Link> 
                    
                    </li>
                    <li className="nav-item">
                    <Link to={`/task/add`} className="nav-link" style={style} >Add a Task</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={style} >Today's Tasks</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" style={style} >Finished Tasks</a>
                    </li>
                </ul>
                </div>
            </nav>

        </div>
    )
}
export default NavBar;