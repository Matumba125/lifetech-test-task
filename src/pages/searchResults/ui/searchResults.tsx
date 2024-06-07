import { useSelector } from 'react-redux';
import { getErrors } from '../../../app/store/selectors';
import style from './searchResults.module.css';
import searchIcon from '../../../shared/icons/header/searchIcon.svg';
import userNotFoundIcon from '../../../shared/icons/searchResults/userNotFound.svg';

const SearchResults = () => {
  const { userNotFound } = useSelector(getErrors);

  return (
    <div className={style.resultsWrapper}>
      {!userNotFound && (
        <div className={style.result}>
          <img src={searchIcon} alt={'searchIcon'} />
          <span>Start with searching</span>
          <span>a GitHub user</span>
        </div>
      )}
      {userNotFound && (
        <div className={style.result}>
          <img src={userNotFoundIcon} alt={'userNotFoundIcon'} />
          <span>User not found</span>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
