import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../Redux/State/Todo/TodoSlice';

const CreateTodo = () => {
    const task = useRef();
    const dispatch=useDispatch();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <input ref={task} type="text" className='form-control' placeholder='Task Name' />
                </div>
                <div className='col-md-2'>
              <button onClick={()=>dispatch(addToDo(task.current.value))} className='btn btn-success'>Add To Do</button>
            </div>
            </div>
        </div>
    );
};

export default CreateTodo;