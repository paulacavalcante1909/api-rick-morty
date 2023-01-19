
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import 'animate.css';

function Modal(props) {


    return (
        
        <div className="modal-backdrop">
        <div className="modal animate__animated animate__slideInLeft">
            <header className="modal-header">
                <div className='modal-title'>{props.header}</div>
                <div className="btn btn__secondary modal-close" onClick={props.closeModal}><FaTimes/></div>
            </header>

            <main className="modal-body">
                {props.body}
            </main>
            <footer className="modal-footer">
                {props.footer}
            </footer>
        </div>
        </div>
    );
}



export default Modal;

