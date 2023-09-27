import React from 'react';

const ModalItem = ({ doctorInfo, handelDoctor }) => {

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className="py-4 font-semibold">Are You sure to delete Doctor {doctorInfo.name}</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-sm btn-success text-white">Cancel</label>
                        <label htmlFor="my_modal_6" className="btn btn-sm bg-red-500 text-white hover:bg-red-600" onClick={() => handelDoctor(doctorInfo)}>Conform</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalItem;