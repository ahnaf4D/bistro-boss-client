import FeaturedImage from '../../../assets/featured.jpg';
import SectionTitle from '../../../components/SectionTitle';
const Feature = () => {
  return (
    <div className='my-12'>
      <header>
        <div
          className='relative w-full h-full my-12 bg-opacity-80 bg-fixed bg-center bg-cover '
          style={{
            backgroundImage: `url(${FeaturedImage})`,
          }}
        >
          <div className='flex flex-col items-center justify-center w-full h-full bg-gray-900/80'>
            <div className='text-center font-inter my-10'>
              <span className='italic  text-[#D99904] text-xl'>
                ---Check it out---
              </span>
              <div className='border-y-4 py-4 md:mx-64'>
                <h1 className='text-4xl uppercase text-white'>FROM OUR MENU</h1>
              </div>
            </div>
            <div className='flex flex-col items-center gap-6 lg:flex-row mt-8 px-4 lg:px-12'>
              <div className='w-full mb-6 lg:w-1/2 flex justify-center items-center lg:justify-end'>
                <img
                  src={FeaturedImage}
                  alt='Featured Dish'
                  className='w-full max-w-md lg:max-w-lg rounded-lg shadow-lg'
                />
              </div>
              <div className='text-white max-w-lg space-y-1 lg:w-1/2 lg:pl-12'>
                <h1 className='text-2xl font-inter  text-center lg:text-left'>
                  March 20, {new Date().getFullYear()} <br />
                  WHERE CAN I GET SOME?
                </h1>
                <p className='font-inter text-xl leading-relaxed text-center lg:text-left'>
                  Welcome to Bistro Boss, where culinary mastery meets
                  exceptional service. Indulge in our exquisite menu, crafted
                  with the finest ingredients and a passion for flavor.
                  Experience the perfect blend of ambiance and taste at Bistro
                  Boss – your ultimate dining destination.
                </p>
                <div className='flex justify-center mb-12 lg:justify-start'>
                  <button className='btn btn-ghost border-b-4 border-b-white text-xl font-inter uppercase'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Feature;
