import Swal from "sweetalert2"
import { editToDo } from "../Redux/State/Todo/TodoSlice"
import Store from "../Redux/Store/Store"

export const todoEdit= (index)=>{
    Swal.fire({
        title: 'Your Task',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            Store.dispatch(editToDo({index,task:result.value}));
        }
      })
}


