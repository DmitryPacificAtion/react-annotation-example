import React from 'react';
import css from './styles.module.scss';
import { UploadButton } from './UploadButton';

export const Header = () => {
  const { container, title } = css;
  return (
    <header className={container}>
      <h1 className={title}>Here goes the file name</h1>
      <UploadButton />
    </header>
  )
}
