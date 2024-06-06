import { FC } from 'react';
import { RepoData } from '../../../app/types/types';
import style from '../userRepositories.module.css';

type ReposListPropsType = {
  items: RepoData[];
};

const ReposList: FC<ReposListPropsType> = ({ items }) => {
  const onItemClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={style.reposWrapper}>
      {items.map((m) => {
        return (
          <div
            onClick={() => onItemClick(m.html_url)}
            className={style.repoItem}
            key={m.id}
          >
            <h2>{m.name}</h2>
            <p>{m.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReposList;
