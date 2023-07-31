import React from "react";
import './ListTodo.css';

function ListTodo(props) {
    console.log('import form app', props);
    return (
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.todos.map((todo) => {
                                    return (
                                        <>
                                            <tr>
                                                <th>{todo.sno}</th>
                                                <td>{todo.itemName}</td>
                                                <td>{todo.dueDate}</td>
                                                <td><button className="btn btn-secondary">delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListTodo