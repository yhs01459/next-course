import Modal from "./Modal";
import { useState } from "react";
import Backdrop from "./Backdrop";

function Todo(props){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }

    function cancelHandler(){
      setModalIsOpen(false);
    }
    return(
        <div className = 'card'>
        <h1>{props.text}</h1>
        <div className = 'actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen ?<Modal onCancel={cancelHandler} onConform={cancelHandler}></Modal>:null } 
        {modalIsOpen && <Backdrop onClick={cancelHandler}></Backdrop>}
      </div>
      );
}
export default Todo;