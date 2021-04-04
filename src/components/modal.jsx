import React, { useRef } from "react";
import { useClickAway } from "./useClickAway";

const Modal = ({ onClose, selectedUser }) => {
    const modalRef = useRef(null);

    useClickAway(modalRef, () => {
        onClose();
    });

    return (
        <div className="shadow-overlay">
            <div ref={modalRef} className="my-modal">
                <div className="modal-header">{selectedUser.name.first}</div>
                <div className="modal-body">
                    <img src={selectedUser.picture.large} alt="" /><br />
                    <p>{selectedUser.dob.age}</p>
                    <p>{selectedUser.location.country}</p>

                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Cancel</button>
                    <button>Ok</button>
                </div>
            </div>
        </div>
    );
}
export default Modal