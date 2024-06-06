import { useSelector } from 'react-redux';
import { getUserData } from '../../app/store/selectors';
import style from './userData.module.css';
import Avatar from '../../shared/ui/avatar/avatar';
import followersIcon from '../../shared/icons/userPage/followers.svg';
import followingIcon from '../../shared/icons/userPage/following.svg';
import { formatFollowCount } from '../../shared/utils/formatFollowCount/formatFollowCount';

const UserData = () => {
  const userData = useSelector(getUserData);

  return (
    <>
      {userData && (
        <div className={style.userDataWrapper}>
          <Avatar url={userData.avatar_url} size={'l'} />
          <div className={style.userInfo}>
            <h2>{userData.name}</h2>
            <a href={userData.html_url} target={'_blank'} rel="noreferrer">
              {userData.login}
            </a>
          </div>
          <div className={style.followInfo}>
            <div>
              <img src={followersIcon} alt={'followersIcon'} />
              <span>{formatFollowCount(userData.followers)} followers</span>
            </div>
            <div>
              <img src={followingIcon} alt={'followingIcon'} />
              <span>{userData.following} following</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserData;
