import ChefServiceImage from '../../../assets/chef-service.jpg';
const ChefService = () => {
  return (
    <div className='my-12'>
      <div
        className='hero mx-auto container h-[455px]'
        style={{
          backgroundImage: `url(${ChefServiceImage})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-5xl py-12 bg-white text-black p-6'>
            <h1 className='mb-5 text-5xl font-normal font-cinzel'>
              Bistro Boss
            </h1>
            <p className='mb-5 font-inter'>
              Welcome to our premier chef service, where culinary excellence
              meets personalized dining experiences. Our skilled chefs craft
              exquisite dishes using the freshest ingredients, ensuring every
              meal is a masterpiece. Whether you’re looking for innovative
              cuisine or classic flavors, our dedicated team is here to make
              your dining experience unforgettable. Join us and savor the art of
              fine dining.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
