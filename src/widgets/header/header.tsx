import { useState, ChangeEvent } from 'react';
import style from './header.module.css';
import logo from '../../shared/icons/header/githubLogo.svg';
import searchIcon from '../../shared/icons/header/searchIcon.svg';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={style.header}>
      <img src={logo} alt={'logo'} />
      <div className={style.searchInputWrapper}>
        <img className={style.searchIcon} src={searchIcon} alt={'searchIcon'} />
        <input
          className={style.searchInput}
          value={searchValue}
          onChange={handleSearchValueChange}
        />
      </div>
    </div>
  );
};

export default Header;
