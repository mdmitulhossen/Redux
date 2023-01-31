import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoEdit } from '../../Helper/editTodo';
import { todoDelete } from '../../Helper/removeToDo';


const TodoList = () => {
    const task = useSelector((state) => state.todo.value);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        {
                            task.map((value, index) => {
                                return (
                                    <tbody key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value}</td>
                                        <td><button onClick={()=>todoEdit(index)}  className='btn btn-sm btn-dark edit'> Edit</button></td>
                                        <td><button onClick={()=>todoDelete(index)}  className='btn btn-sm btn-danger edit'>Remove</button></td>
                                    </tbody>
                                )
                            })
                        }


                    </table>
                </div>

            </div>
        </div>

    );
};

export default TodoList;