import React, { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import { t } from '../../../i18n';
import classes from './styles.module.scss';

export default function Images({ images = [], setImages }) {
  const inputRef = useRef();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const maxImagesLength = isTabletOrMobile ? 8 : 8;

  const emptyPhotoSockets = Array.from(Array(maxImagesLength - images.length));

  const addImages = (event) => {
    setImages((prevImages) => {
      if (prevImages.length === maxImagesLength) {
        return prevImages;
      }

      let newImages = Array.from(event.target.files).filter((file) => {
        return !prevImages.some((prvImg) => prvImg.name === file.name);
      });

      if (prevImages.length + newImages.length > maxImagesLength) {
        const imagesToRemove =
          prevImages.length + newImages.length - maxImagesLength;
        newImages = newImages.slice(-1 * imagesToRemove);
      }

      return [...prevImages, ...newImages];
    });
  };

  const deleteImage = (image) => {
    setImages((prevImages) => {
      return prevImages.filter((prevImage) => prevImage !== image);
    });
  };

  return (
    <>
      <h2 className={classes.imgsHeader}>{t('propertyPhoto')}</h2>
      <div className={classes.Images}>
        <div className={classes.uploader}>
          <input
            accept="image/*"
            type="file"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={addImages}
            multiple
          />
          <button type="button" onClick={() => inputRef.current.click()}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#22BC32" />
              <g clipPath="url(#clip0_31_1934)">
                <path
                  d="M22.4 15.5999H7.6C7.2688 15.5999 7 15.3311 7 14.9999C7 14.6687 7.2688 14.3999 7.6 14.3999H22.4C22.7313 14.3999 23 14.6687 23 14.9999C23 15.3311 22.7313 15.5999 22.4 15.5999Z"
                  fill="white"
                />
                <path
                  d="M15.0004 23C14.6692 23 14.4004 22.7313 14.4004 22.4V7.6C14.4004 7.2688 14.6692 7 15.0004 7C15.3316 7 15.6004 7.2688 15.6004 7.6V22.4C15.6004 22.7313 15.3316 23 15.0004 23Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_1934">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <h1>{t('Add photos')}</h1>
        </div>
        {images.map((img) => {
          return (
            <div key={img.name} className={classes.image}>
              <img src={URL.createObjectURL(img)} alt="Preview" />
              <button type="button" onClick={() => deleteImage(img)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="4" width="12" height="12" fill="white" />
                  <path
                    d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM13.9225 12.7442C14.2483 13.07 14.2483 13.5967 13.9225 13.9225C13.76 14.085 13.5467 14.1667 13.3333 14.1667C13.12 14.1667 12.9067 14.085 12.7442 13.9225L10 11.1783L7.25583 13.9225C7.09333 14.085 6.88 14.1667 6.66667 14.1667C6.45333 14.1667 6.24 14.085 6.0775 13.9225C5.75167 13.5967 5.75167 13.07 6.0775 12.7442L8.82167 10L6.0775 7.25583C5.75167 6.93 5.75167 6.40333 6.0775 6.0775C6.40333 5.75167 6.93 5.75167 7.25583 6.0775L10 8.82167L12.7442 6.0775C13.07 5.75167 13.5967 5.75167 13.9225 6.0775C14.2483 6.40333 14.2483 6.93 13.9225 7.25583L11.1783 10L13.9225 12.7442Z"
                    fill="#EF5225"
                  />
                </svg>
              </button>
            </div>
          );
        })}
        {emptyPhotoSockets.map(() => (
          <div className={classes.emptyPhotoSocket} key={Math.random()} />
        ))}
      </div>
    </>
  );
}
