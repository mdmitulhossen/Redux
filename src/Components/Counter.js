import React,{useRef} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {increament,decreament,setCustom} from "../Redux/State/Counter/CounterSlice"

const Counter = () => {
    
   const customValue = useRef();
   const count= useSelector((state)=>state.counter.value)

   const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={()=>dispatch(increament())} className='btn btn btn-success'>Increase</button>
                    <button onClick={()=>dispatch(decreament())} className='btn btn btn-danger mx-2'>Decrease</button>
                </div>
                <div className='my-4'>
                    <input ref={customValue} className='form-control' type="number" />
                    <button  onClick={()=>dispatch(setCustom(parseInt(customValue.current.value)))} className='btn btn btn-secondary mt-2'>Set Custom value</button>
                </div>
            </div>
            
        </div>
    );
};

export default Counter;