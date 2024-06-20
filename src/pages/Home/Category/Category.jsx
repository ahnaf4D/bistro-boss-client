import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SlideOne from '../../../assets/slide1.jpg';
import SlideTwo from '../../../assets/slide2.jpg';
import SlideThree from '../../../assets/slide3.jpg';
import SlideFour from '../../../assets/slide4.jpg';
import SlideFive from '../../../assets/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';
import './Category.css';
const Category = () => {
  return (
    <>
      <SectionTitle
        massage={'From 11:00am to 10:00pm'}
        heading={'order OnLine'}
      ></SectionTitle>
      <div className='mx-auto container '>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={SlideOne} alt='Category' />
            <p className='category-text font-cinzel'>Salads</p>
            <br />
            <br />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideTwo} alt='Category' />
            <p className='category-text font-cinzel'>pizzas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideThree} alt='Category' />
            <p className='category-text font-cinzel'>Soups</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideFour} alt='' />
            <p className='category-text font-cinzel'>Desserts</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideFive} alt='' />
            <p className='category-text font-cinzel'>Salads</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;
