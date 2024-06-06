import React from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../app/store/selectors';
import style from './userData.module.css';
import Avatar from '../../shared/ui/avatar/avatar';

const UserData = () => {
  const userData = useSelector(getUserData);

  return (
    <>
      {userData && (
        <div className={style.userDataWrapper}>
          <Avatar url={userData.avatar_url} size={'l'} />
        </div>
      )}
    </>
  );
};

export default UserData;
