import UserData from '../../../widgets/userData/userData';
import UserRepositories from '../../../widgets/userRepositories/userRepositories';
import style from './userPage.module.css';

const UserPage = () => {
  return (
    <div className={style.userWrapper}>
      <UserData />
      <UserRepositories />
    </div>
  );
};

export default UserPage;
