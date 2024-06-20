import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageOne from '../../../assets/01.jpg';
import ImageTwo from '../../../assets/02.jpg';
import ImageThree from '../../../assets/03.png';
import ImageFour from '../../../assets/04.jpg';
import ImageFive from '../../../assets/05.png';
import ImageSix from '../../../assets/06.png';
import './custom.thumb.css';
const Slider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => null}
        renderArrowNext={(onClickHandler, hasNext, label) => null}
      >
        <div>
          <img src={ImageOne} />
        </div>
        <div>
          <img src={ImageTwo} />
        </div>
        <div>
          <img src={ImageThree} />
        </div>
        <div>
          <img src={ImageFour} />
        </div>
        <div>
          <img src={ImageFive} />
        </div>
        <div>
          <img src={ImageSix} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
