function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function conformHandler(){
        props.onConform();
    }
    return(
        <div className='modal'>
            <p>정말 삭제하시겠습니까?</p>
            <button className="btn" onClick={conformHandler}>예</button>
            <button className="btn btn--alt" onClick={cancelHandler}>아니오</button>
        </div>

    );
}
export default Modal;