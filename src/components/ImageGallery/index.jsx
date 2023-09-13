import React, { useState, useEffect, useRef } from 'react';

import { STATIC_URL } from '../../constants/main';
import classes from './styles.module.scss';

export default function ImageGallery({ images = [], price }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [isAnimationDisabled, setIsAnimationsDisabled] = useState(false);

  const currentImageRef = useRef();
  const nextImageRef = useRef();
  const prevImageRef = useRef();
  const imagesRef = useRef();

  const showNextImage = () => {
    if (isAnimationDisabled) {
      return;
    }
    imagesRef.current.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      setIsAnimationsDisabled(true);

      setPrevImageIndex(() => {
        if (nextImageIndex === 0) {
          return images.length - 1;
        }
        return nextImageIndex - 1;
      });
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex(() => {
        if (nextImageIndex === images.length - 1) {
          return 0;
        }
        return nextImageIndex + 1;
      });
      imagesRef.current.style.transform = 'unset';
    }, 150);
    setTimeout(() => {
      setIsAnimationsDisabled(false);
    }, 250);
  };

  const showPreviousImage = () => {
    if (isAnimationDisabled) {
      return;
    }
    imagesRef.current.style.transform = 'translateX(100%)';
    setTimeout(() => {
      setIsAnimationsDisabled(true);
      setCurrentImageIndex(prevImageIndex);
      setPrevImageIndex(() => {
        if (prevImageIndex === 0) {
          return images.length - 1;
        }
        return prevImageIndex - 1;
      });
      setNextImageIndex(() => {
        if (prevImageIndex === images.length - 1) {
          return 0;
        }
        return prevImageIndex + 1;
      });
      imagesRef.current.style.transform = 'unset';
    }, 150);
    setTimeout(() => {
      setIsAnimationsDisabled(false);
    }, 250);
  };

  const switchToImageIndex = (imageIndex) => {
    if (images.length === 1) {
      return;
    }

    setCurrentImageIndex(imageIndex);
    if (imageIndex === 0) {
      setPrevImageIndex(images.length - 1);
      setNextImageIndex(imageIndex + 1);
    } else if (imageIndex === images.length - 1) {
      setPrevImageIndex(imageIndex - 1);
      setNextImageIndex(0);
    } else {
      setPrevImageIndex(imageIndex - 1);
      setNextImageIndex(imageIndex + 1);
    }
  };

  useEffect(() => {
    setCurrentImageIndex(0);
    if (images.length === 2) {
      setNextImageIndex(1);
      setPrevImageIndex(1);
    } else {
      setNextImageIndex(1);
      setPrevImageIndex(images.length - 1);
    }
  }, [images]);

  return (
    <div className={classes.ImageGallery}>
      <div className={classes.currentImage}>
        <p className={classes.galleryPrice}> £ {price != null ? price.toLocaleString('en-US') : 0} </p>
        <div
          className={classes.images}
          style={{
            left: '-100%',
            transition: isAnimationDisabled ? '' : 'all 0.15s',
          }}
          ref={imagesRef}
        >
          {prevImageIndex !== null && (
            <img
              src={STATIC_URL + images[prevImageIndex]}
              ref={prevImageRef}
              alt=""
            />
          )}
          <img
            src={STATIC_URL + images[currentImageIndex]}
            ref={currentImageRef}
            alt=""
          />
          {nextImageIndex !== null && (
            <img
              src={STATIC_URL + images[nextImageIndex]}
              ref={nextImageRef}
              alt=""
            />
          )}
        </div>
      </div>
      <div className={classes.thumbnails}>
        {images.map((image, index) => {
          return (
            <img
              src={STATIC_URL + image}
              key={image}
              alt="Thumbnail"
              loading="lazy"
              onClick={() => switchToImageIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
