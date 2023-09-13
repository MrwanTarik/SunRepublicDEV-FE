import React, { useState, useEffect } from 'react';

import ItemsCarousel from 'react-items-carousel';

import photoOne from '../../assets/images/carouselImages/1+1iniskele.jpg';
import photoTwo from '../../assets/images/carouselImages/2+1iniskele.jpg';
import photoThree from '../../assets/images/carouselImages/3+1iniskele.jpg';
import photoFour from '../../assets/images/carouselImages/bungalowinKyrenia.jpg';
import photoFive from '../../assets/images/carouselImages/duplexinKyrenia.jpg';
import photoSix from '../../assets/images/carouselImages/penthouseiniskele.jpg';
import photoSeven from '../../assets/images/carouselImages/villainKyrenia.jpeg';
import photoEight from '../../assets/images/carouselImages/villainkyrenia2.jpg';

import Item from './Item';
import './styles.scss';

const imagesData = [
  { src: photoOne, label: '1+1 in Iskele' },
  { src: photoTwo, label: '2+1 in Iskele' },
  { src: photoThree, label: '3+1 in Iskele' },
  { src: photoFour, label: 'Bungalow in Kyrenia' },
  { src: photoFive, label: 'Duplex in Kyrenia' },
  { src: photoSix, label: 'Penthouse in Iskele' },
  { src: photoSeven, label: 'Villa in Kyrenia' },
  { src: photoEight, label: 'Villa in Kyrenia' },
];

export default function PropetyCarousel({ containerRef }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(4);

  useEffect(() => {
    if (containerRef.current) {
      setNumberOfItems(Math.floor(containerRef.current.offsetWidth / 250));
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNumberOfItems(Math.floor(containerRef.current.offsetWidth / 250));
    });
  }, [containerRef]);

  return (
    <div>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfItems}
        gutter={0}
        leftChevron={
          <button type="button" className="chevronButton">
            <svg
              width="70"
              height="80"
              viewBox="0 0 70 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.6"
                width="70"
                height="79.9794"
                rx="8"
                fill="black"
              />
              <path
                d="M28.9999 39.9904C28.9999 39.7347 29.0977 39.4788 29.2929 39.2836L39.2929 29.2862C39.6837 28.8955 40.3164 28.8955 40.7069 29.2862C41.0974 29.6768 41.0977 30.3094 40.7069 30.6998L31.4139 39.9904L40.7069 49.281C41.0977 49.6717 41.0977 50.3042 40.7069 50.6946C40.3162 51.085 39.6834 51.0853 39.2929 50.6946L29.2929 40.6972C29.0977 40.502 28.9999 40.2461 28.9999 39.9904Z"
                fill="white"
              />
            </svg>
          </button>
        }
        rightChevron={
          <button type="button" className="chevronButton">
            <svg
              width="70"
              height="80"
              viewBox="0 0 70 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.6"
                width="70"
                height="79.9794"
                rx="8"
                fill="black"
              />
              <path
                d="M41.0001 39.9901C41.0001 40.2458 40.9023 40.5017 40.7071 40.6969L30.7071 50.6943C30.3163 51.085 29.6836 51.085 29.2931 50.6943C28.9026 50.3037 28.9023 49.6711 29.2931 49.2807L38.5861 39.9901L29.2931 30.6995C28.9023 30.3088 28.9023 29.6762 29.2931 29.2858C29.6838 28.8954 30.3166 28.8952 30.7071 29.2858L40.7071 39.2833C40.9023 39.4785 41.0001 39.7344 41.0001 39.9901Z"
                fill="white"
              />
            </svg>
          </button>
        }
        outsideChevron
        chevronWidth={40}
        classes={{
          itemWrapper: 'itemWrapper',
          rightChevronWrapper: 'rightChevron',
          leftChevronWrapper: 'leftChevron',
        }}
        alwaysShowChevrons
      >
        {imagesData.map((el) => {
          return <Item key={el.label} photo={el} />;
        })}
      </ItemsCarousel>
    </div>
  );
}
