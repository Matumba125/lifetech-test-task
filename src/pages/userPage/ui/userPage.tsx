import { useEffect } from 'react';
import { fetchUsers, fetchUserRepos } from '../model/userReducer';
import { useAppDispatch } from '../../../app/store/store';
import UserData from '../../../widgets/userData/userData';
import UserRepositories from '../../../widgets/userRepositories/userRepositories';
import style from './userPage.module.css';

const UserPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const username = 'gaearon';
    dispatch(fetchUsers(username));
    dispatch(fetchUserRepos(username));
  }, [dispatch]);

  return (
    <div className={style.userWrapper}>
      <UserData />
      <UserRepositories />
    </div>
  );
};

export default UserPage;
