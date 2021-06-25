import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import code from '../../assets/images/code.png'
import work from '../../assets/images/work.jpg'
import analytic from '../../assets/images/analytics.jpg'


const items = [
  {
    src: code,
    altText: 'Slide 1',
    caption: 'Web Development'
    
  },
  {
    src: work,
    altText: 'Slide 2',
    caption: 'Human Resources'
    
  },
  {
    src: analytic,
    altText: 'Slide 3',
    caption: 'Analytics'
  }
];

const CarouselComp = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem className="carouselContainer"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carouselImg" src={item.src} height="400px" width="800px" alt={item.altText} />
        <CarouselCaption className="captionText" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselComp;