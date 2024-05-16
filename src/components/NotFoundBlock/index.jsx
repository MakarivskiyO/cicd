import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span> 😕 </span>
        <br />
        Нічого немає
      </h1>
      <p className={styles.description}>Йдіть нахуй</p>
    </div>
  );
};

export default NotFoundBlock;
