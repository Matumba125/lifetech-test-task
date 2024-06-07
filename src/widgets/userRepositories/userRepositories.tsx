import { useSelector } from 'react-redux';
import { getErrors, getUserRepositories } from '../../app/store/selectors';
import Pagination from './pagination/pagination';
import style from './userRepositories.module.css';
import emptyReposIcon from '../../shared/icons/userPage/emptyRepos.svg';

const UserRepositories = () => {
  const repos = useSelector(getUserRepositories);
  const { reposEmpty } = useSelector(getErrors);

  return (
    <>
      {!reposEmpty ? (
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
      ) : (
        <div className={style.emptyRepos}>
          <img src={emptyReposIcon} alt={'emptyReposIcon'} />
          <span>Repository list is empty</span>
        </div>
      )}
    </>
  );
};

export default UserRepositories;
