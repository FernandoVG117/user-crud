import { useEffect, useState } from 'react';
import useCRUD from './hooks/useCRUD';
import UserCard from './components/userCard/UserCards';
import UserForm from './components/UserForm/UserForm';
import Footer from './components/Footer/Footer';
import Separator from './components/separator/Separator';
import gearLoading from './assets/gears.gif';
import './App.css';

function App() {

  const [update, setUpdate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [users, getUsers, createUser, deleteUser, updateUser, isLoading] = useCRUD();


  useEffect(() => {   
    getUsers('/users');    
  }, []);

  const handleForm = () => {
    setIsShow(true);
  };    

  return (
    <>
    {isLoading ? (
      <div className="app__loading-message">
        <figure>
          <img src={gearLoading} alt="loading_gear" />
        </figure>
        <h2 className='app__loading-txt'>One moment please ...</h2>
      </div>
    ) : (
      <>
        <div className='app'>
          <div className="app__header">
          <h2 className='app__title'>CRUD USERS</h2>
          <button onClick={handleForm} className='app__btn'>
            <span>+ | Create User</span>
          </button>
          </div>
          <Separator />
          <UserForm
            createUser={createUser}
            update={update}
            setUpdate={setUpdate}
            updateUser={updateUser}
            isShow={isShow}
            setIsShow={setIsShow}
          />
          <div className='app__container'>
            {users?.map((user) => (
              <UserCard 
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUpdate={setUpdate}
                setIsShow={setIsShow}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    )}
  </>





    // <>
    // <div className='app'>
    //   <div className="app__header">
    //     <h2 className='app__title'>CRUD USERS</h2>
    //     <button onClick={handleForm} className='app__btn'>
    //       <span>+ | Create User</span>
    //     </button>

    //   </div>
    //   <Separator />
    //   <UserForm
    //     createUser={createUser}
    //     update={update}
    //     setUpdate={setUpdate}
    //     updateUser={updateUser}
    //     isShow={isShow}
    //     setIsShow={setIsShow}
    //   />
    //   <div className='app__container'>
    //     {
    //       users?.map((user) => (
    //         <UserCard 
    //           key={user.id}
    //           user={user}
    //           deleteUser={deleteUser}
    //           setUpdate={setUpdate}
    //           setIsShow={setIsShow}
    //         />
    //       ))
    //     }
    //   </div>
    // </div>
    // <Footer />
    // </>
  )
}

export default App
