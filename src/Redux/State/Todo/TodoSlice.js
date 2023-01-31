import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
   name:'todo',
   initialState:{
    value:[]
   },
   reducers:{
      addToDo:(state,action)=>{
          state.value.push(action.payload)
      },
      removeToDo:(state,action)=>{
        state.value=state.value.filter((value,index)=>index!==action.payload)
    },
    editToDo:(state,action)=>{
        // {index:1,task:"sdf"}
        //remove 1 item and add update task
        state.value.splice(action.payload['index'],1,action.payload['task'])
    }
   }
})
export const {addToDo,removeToDo,editToDo}=TodoSlice.actions;

export default TodoSlice.reducer;