import React, { useRef } from 'react';
import useSlider from '../hooks/useSlider';
import { styles } from './styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const slideTitle = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    slideTitle,
    images
  );

  return (
    <>
      <div ref={slideImage} style={styles.slider}>
        <div className='slider--content' style={styles.sliderContent}>
          <button
            onClick={goToPreviousSlide}
            className='slider__btn-left'
            style={styles.slider__btnLeft}
          >
            <ArrowCircleLeftIcon />
          </button>
          <div className='slider--feature' style={styles.sliderFeature}>
            <h1
              ref={slideTitle}
              className='feature--title'
              style={styles.featureTitle}
            >
              Dreaming
            </h1>
            <p
              ref={slideText}
              className='feature--text'
              style={styles.featureText}
            ></p>
            <button className='feature__btn' style={styles.featureBtn}>
              Get started
            </button>
          </div>
          <button
            onClick={goToNextSlide}
            className='slider__btn-right'
            style={styles.slider__btnRight}
          >
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};
