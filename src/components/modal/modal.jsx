import { useState } from 'react';
import './modal.css';
const Modal = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [isClose, setIsClose] = useState('');

    const closeModal= ()=>{
        setIsClose('out');
        setIsModalActive(false);
    }
    const handleButtonClick = () => {
        setIsModalActive(true);
    };
    return ( 
        <div className='container'>
            {!isModalActive ? (
                 <div className="content">
                 <div className="button" onClick={()=>handleButtonClick()}>Bond</div>
             </div>
            ):""}
            {(isModalActive && isClose === "out") ? (
                <div className="modal-container out">
                    <div className="modal-background">
                        <div className="modal">
                            <div className='close'><button onClick={()=>closeModal()}>close</button></div>
                            <h2>I'm a Modal</h2>
                            <p>Hear me roar.</p>
                        </div>
                    </div>
                </div>
            ) :(isModalActive && isClose !== "out" )? (
                <div className="modal-container">
                    <div className="modal-background">
                        <div className="modal">
                            <div className='close'><button onClick={()=>closeModal()}>close</button></div>
                            <h2>I'm a Modal</h2>
                            <p>Hear me roar.</p>
                        </div>
                    </div>
                </div>
            ):""}
        </div>
     );
}
 
export default Modal;