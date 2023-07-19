import React from 'react';
// import adminContext from '../../context/services/adminContext'
const ModalFormsCustomer = ({ isOpen, onClose }) => {
  
  
  if (!isOpen) {
    return null;
  }

  return (

<div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-4/5 h-4/5">
        <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Data Table Form</h2>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg" onClick={onClose} >  Close </button>
        </div>
        <div>
          
      

        Working on


        </div>

       
      </div>
    </div>

  
  );
};

export default ModalFormsCustomer;
