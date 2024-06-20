import ChefService from '../ChefService/ChefService';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommended from '../Recommended/Recommended';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommended></Recommended>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
