import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useEscapeKey from '../../hooks/useEscapeKey';
import './UserForm.css';

const UserForm = ({createUser, update, setUpdate, updateUser, isShow, setIsShow}) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
        reset(update);
    }, [update]);

    const submit = (data) => {
        if (!data.image_url) {
            data.image_url = 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg'
        }
        if (update) {
            updateUser('/users', update.id, data)
            setUpdate();
        } else {
            createUser('/users', data);
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
            image_url: '',
        });
        setIsShow(false);
    };

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
            image_url: '',
        });
        setIsShow(false);
        setUpdate();
    }

    useEscapeKey(handleClose);

    return (
        <div className={`userform ${isShow && 'active'}`}>
            <form onSubmit={handleSubmit(submit)} className='userform__form'>
                <div className='userform__header'>
                    <h2 className='userform__title'>
                        {
                            !update ? 
                                'New User'
                                :
                                'Edit User'
                        }
                    </h2>
                    <button type='button' className='userform__btn-x' onClick={handleClose}>    
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
                <div className='userform__item'>
                    <label htmlFor="first_name">First Name: </label>
                    <input {...register('first_name')} type="text" id='first_name' placeholder='example: Maria' required/>
                </div>
                <div className='userform__item'>
                    <label htmlFor="last_name">Last Name: </label>
                    <input {...register('last_name')} type="text" id='last_name' placeholder='example: Delgado' required />
                </div>
                <div className='userform__item'>
                    <label htmlFor="email">Email: </label>
                    <input {...register('email')} type="email" id='email' placeholder='email@email.com' required />
                </div>
                <div className='userform__item'>
                    <label htmlFor="password">Password: </label>
                    <input {...register('password')} type="password" id='password' placeholder='Enter a safety password.' required />
                </div>
                <div className='userform__item'>
                    <label htmlFor="birthday">Birthday: </label>
                    <input {...register('birthday')} type="date" id='birthday' required />
                </div>
                <div className='userform__item'>
                    <label htmlFor="image_url">Image Profile: </label>
                    <input {...register('image_url')} type="text" id='image_url' placeholder='Enter you URL image (optional)' />
                </div>
                <button className='userform__btn'>
                        {
                            !update ? 
                                'Add New User'
                                :
                                'Update User'
                        }
                </button>
            </form>
        </div>
    )
}

export default UserForm
