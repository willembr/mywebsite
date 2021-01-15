import React from 'react';
import Auxial from '../../../hoc/Auxial/Auxial';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {
    return(
        <Auxial>
            <Backdrop show/>
            <div className="Modal">
                {props.children}
            </div>
        </Auxial>
    );
};

export default Modal;