import React from 'react';
import CreateTodo from '../Components/todo/CreateTodo';
import TodoList from '../Components/todo/TodoList';

const ToDoPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>My ToDo App</h3>
                        </div>
                        <div className='card-body'>
                           <CreateTodo/>
                           <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoPage;