import { useSelector } from 'react-redux';
import { getUserRepositories } from '../../app/store/selectors';
import Pagination from './pagination/pagination';
import style from './userRepositories.module.css';

const UserRepositories = () => {
  const repos = useSelector(getUserRepositories);

  return (
    <div className={style.userRepositoriesWrapper}>
      {repos && (
        <div>
          <h1>Repositories ({repos.length})</h1>
          <div>
            <Pagination items={repos} itemsPerPage={4} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRepositories;
