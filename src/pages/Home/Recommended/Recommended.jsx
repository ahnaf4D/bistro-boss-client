import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import Card from '../../Shared/Card';

const Recommended = () => {
  const [recommendedFood, setRecommendedFood] = useState([]);
  useEffect(() => {
    fetch(`./recommended.json`)
      .then((res) => res.json())
      .then((data) => setRecommendedFood(data));
  });
  return (
    <div>
      <SectionTitle
        massage='Should Try'
        heading='Chef Recommends'
      ></SectionTitle>
      <div className='grid grid-cols-1 gap-4 mx-auto container md:grid-cols-2 lg:grid-cols-3'>
        {recommendedFood.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
