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
                 <div className="button" onClick={()=>handleButtonClick()}>这是给你的</div>
             </div>
            ):""}
            {(isModalActive && isClose === "out") ? (
                <div className="modal-container out">
                    <div className="modal-background">
                    <div className="button close" onClick={()=>closeModal()}>X</div>
                        <div className="modal">
                            <h2>Happy Women’s Day My Love</h2>
                            <p>Sending you wishes to say you blossom up the world around me! Happy Women’s Day!</p>
                            <p>We may not be able to see each other or listen to each other often. But thoughts of you fill my heart with fond memories of the times we have spent together. Thinking of you!</p>
                            <p>Holding your hands, feeling the warmth of our togetherness, sharing sweet secrets of love. Sweetheart, with you every moment seems like an everlasting dream.</p>
                            <span>You’ll always be there in my heart! I love you "红 莲" &#10084;.</span>
                        </div>
                    </div>
                </div>
            ) :(isModalActive && isClose !== "out" )? (
                <div className="modal-container">
                    <div className="modal-background">
                    <div className="button close" onClick={()=>closeModal()}>X</div>
                        <div className="modal">
                            <h2>Happy Women’s Day My Love</h2>
                            <p>Sending you wishes to say you blossom up the world around me! Happy Women’s Day!</p>
                            <p>We may not be able to see each other or listen to each other often. But thoughts of you fill my heart with fond memories of the times we have spent together. Thinking of you!</p>
                            <p>Holding your hands, feeling the warmth of our togetherness, sharing sweet secrets of love. Sweetheart, with you every moment seems like an everlasting dream.</p>
                            <span>You’ll always be there in my heart! I love you "红 莲" &#10084;.</span>
                            <p>&#10084;</p>
                        </div>
                    </div>
                </div>
            ):""}
        </div>
     );
}
 
export default Modal;