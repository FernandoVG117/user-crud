import React, { useState } from 'react';
import './Modal.css';
import warmingImg from './warming_01.gif';
import useEscapeKey from '../../hooks/useEscapeKey';

const Modal = ({ user, isOpen, setIsOpen, deleteUser }) => {
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  const handleAccept = () => {
    // deleteUser('/users', user.id);
    setIsUserDeleted(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    deleteUser('/users', user.id);
    setIsOpen(false);
    setIsUserDeleted(false);
  };

  useEscapeKey(handleCancel);

  return (
    <>
      <article className={`modal ${isOpen && 'active'}`}>
        <div className='modal__back'>
          {!isUserDeleted ? (
            <>
              <div className='modal__iconalert'>
                <img src={warmingImg} alt="alert" className='modal__icon' />
              </div>
              <div className='modal__body'>
                <h3 className='modal__title'>Are you sure you want to permanently remove this user?</h3>
                <div className='modal__container'>
                  <button onClick={handleAccept} className='modal__btn accept'>Accept</button>
                  <button onClick={handleCancel} className='modal__btn cancel'>Cancel</button>
                </div>
              </div>
            </>
          ) : (
            <div className="modal__body deleted">
              <h3 className='modal__title'>
                <span>The user "<span className='modal__user'>{`${user.first_name} ${user.last_name}`}</span>" has been deleted.</span>
              </h3>
              <div className="modal__container">
                <button onClick={handleClose} className='modal__btn close'>Close</button>
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default Modal;
