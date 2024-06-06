import React, { FC } from 'react';
import style from './avatar.module.css';

type AvatarPropsType = {
  url: string;
  size: 's' | 'm' | 'l';
};

const Avatar: FC<AvatarPropsType> = ({ url, size }) => {
  const getAvatarStyle = () => {
    switch (size) {
      case 's':
        return {
          width: '40px',
          height: '40px',
        };
      case 'm':
        return {
          width: '140px',
          height: '140px',
        };
      case 'l':
        return {
          width: '280px',
          height: '280px',
        };
    }
  };

  return (
    <>
      <img
        style={getAvatarStyle()}
        className={style.avatar}
        src={url}
        alt={'avatar'}
      />
    </>
  );
};

export default Avatar;
