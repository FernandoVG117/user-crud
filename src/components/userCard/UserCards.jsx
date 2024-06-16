import React, { useState } from 'react';
import './UserCard.css';
import Modal from '../Modal/Modal';

const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleEdit = () => {
    setUpdate(user);
    setIsShow(true);
    }

  const handleDelete = () => {
    setIsOpen(true);
  }


  return (
    <article className='usercard'>
      <Modal 
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteUser={deleteUser}
      />

      <div className="usercard__header">
        <figure className='usercard__cont-img'>
          <img src={user.image_url || 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg' } alt={`${user.first_name}_${user.last_name}_${user.id}`} className='usercard__image'/>
        </figure>
        <h2 className='usercard__name'>{user.first_name} {user.last_name}</h2>
      </div>

      <hr className='usercard__hr' />
      <ul className='usercard__list'>
        <li className='usercard__item'>
          <span>Email: </span>
          <span className='usercard__email_text'>
          <ion-icon name="mail-outline"></ion-icon> {user.email}
          </span>
        </li>
        <li className='usercard__item'>
          <span>Birthday: </span>
          <span>
            <ion-icon name="gift-outline"></ion-icon> {user.birthday}
          </span>
        </li>
      </ul>
      <hr className='usercard__hr' />
      <div className='usercard__container'>
        <button onClick={handleDelete} className='usercard__btn delete'>
          <ion-icon name="trash-outline"></ion-icon>
        </button> 
        <button onClick={handleEdit} className='usercard__btn update'>
          <ion-icon name="pencil-outline"></ion-icon>
        </button>
      </div>
    </article>
  )
}

export default UserCard
