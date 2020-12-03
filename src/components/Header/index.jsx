import React from 'react';
import css from './styles.module.scss';

export const Header = () => {
  const { container, title, uploadButton } = css;
  console.log(css);
  console.log(container);
  return (
    <header className={container}>
      <h1 className={title}>Here goes the file name</h1>
      <button className={uploadButton}>Upload image</button>
    </header>
  )
}
