import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import PopularMenu from '../PopularMenu/PopularMenu';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Feature></Feature>
    </div>
  );
};

export default Home;
