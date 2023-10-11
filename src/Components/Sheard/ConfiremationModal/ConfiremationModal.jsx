import React from 'react';

const ConfiremationModal = ({ title, message, closeModal, handleDelete, userData }) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className="modal" id="my_modal_8">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <a href="#" onClick={closeModal} className="btn">NO</a>
                        <a href="#" onClick={() => { handleDelete(userData) }} className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfiremationModal;