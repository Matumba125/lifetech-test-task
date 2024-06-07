import { useState, ChangeEvent, KeyboardEvent } from 'react';
import style from './header.module.css';
import logo from '../../shared/icons/header/githubLogo.svg';
import searchIcon from '../../shared/icons/header/searchIcon.svg';
import { useAppDispatch } from '../../app/store/store';
import {
  fetchUserRepos,
  fetchUsers,
} from '../../pages/userPage/model/userReducer';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchUserRepos(searchValue));
      dispatch(fetchUsers(searchValue))
        .unwrap()
        .then(() => navigate('/user'))
        .then(() => setSearchValue(''));
    }
    return;
  };

  return (
    <div className={style.header}>
      <Link to={'/'}>
        <img src={logo} alt={'logo'} />
      </Link>
      <div className={style.searchInputWrapper}>
        <img className={style.searchIcon} src={searchIcon} alt={'searchIcon'} />
        <input
          className={style.searchInput}
          value={searchValue}
          onChange={handleSearchValueChange}
          onKeyDown={handleEnterKeyDown}
        />
      </div>
    </div>
  );
};

export default Header;
