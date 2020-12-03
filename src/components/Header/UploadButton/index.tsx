import React, { FC } from 'react';
import css from './styles.module.scss';

export const UploadButton: FC = () => {
  const { container, input, uploadButton } = css;
  return (
    <form className={container}>
      <label className={uploadButton}>
        Upload image
      <input className={input} type="file" />
      </label>
    </form>
  );
};
