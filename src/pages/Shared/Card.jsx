const Card = ({ item }) => {
  const { name, description, photo } = item;
  return (
    <div>
      <div className='card font-inter card-compact h-[400px] bg-[#F3F3F3] rounded-none'>
        <figure>
          <img src={photo} alt='Shoes' className='w-[424px] h-[250px]' />
        </figure>
        <div className='card-body text-center '>
          <h2 className='card-title mx-auto '>{name}</h2>
          <p>{description}</p>
          <div className='card-actions justify-center'>
            <button className='btn  uppercase  bg-[#E8E8E8] text-[#BB8506]  border-b-4 border-b-[#BB8506] hover:bg-[#1F2937]'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
