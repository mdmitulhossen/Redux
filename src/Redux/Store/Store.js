import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../State/Counter/CounterSlice";
import todoReducer from '../State/Todo/TodoSlice'

export default configureStore({
    reducer:{
       counter:counterReducer,
       todo:todoReducer
    }
})