import React, { useState } from 'react';
import Input from "./Input";


const TaskForm = ({handleChange, handleSubmit, form, errors}) => {

        return(
            <div >
            <form  className= "col-3 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                <Input
                    type="text"
                    name="title"
                    defaultValue= "My task"
                    handleChange = {handleChange}
                    value={form.title}
                    error={errors.title != null ? errors.title.message: ""}
                    label="Title: "
                />
                <Input
                    type="date"
                    name="duedate"
                    defaultValue= "05/19/20"
                    handleChange = {handleChange}
                    value={form.duedate}
                    error={errors.duedate != null ? errors.duedate.message: ""}
                    label="Due Date: "
                />
                <Input
                    type="text"
                    name="description"
                    defaultValue= "Gotta hustle ... "
                    handleChange = {handleChange}
                    value={form.description}
                    error={errors.description != null ? errors.description.message: ""}
                    label="Description: "
                />
                <input type="submit" value="Add Task" className="btn" />
            </form>
            </div>
        );
}

export default TaskForm;

