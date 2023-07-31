import React from "react";
import './AddTodo.css';
import ListTodo from './../list_todo/ListTodo';

let todos = [
    {
        sno: 1,
        itemName: 'go to market',
        dueDate: '11/03/2023'
    },
    {
        sno: 2,
        itemName: 'go to office',
        dueDate: '12/05/2023'
    },
    {
        sno: 3,
        itemName: 'go to university',
        dueDate: '11/04/2023'
    }
]

function AddTodo() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
        todos = formJson;
        console.log(todos)
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="input">
                            <label for="exampleFormControlInput1" className="form-label">Add Item</label>
                            <input type="text" className="form-control" name="todoItem" id="exampleFormControlInput1" placeholder="add todos here ..." />
                        </div>
                        <div className="input">
                            <label for="exampleFormControlInpu2" className="form-label">Due Date</label>
                            <input type="date" className="form-control" name="todoDueDate" id="exampleFormControlInput2" />
                        </div>
                        <div className="btn-add">
                            <button className="btn btn-primary" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <ListTodo todos={todos} />
        </>
    )
}

export default AddTodo