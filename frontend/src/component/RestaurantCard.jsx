import React, { useEffect } from 'react';
import { Star, Ticket } from 'lucide-react';
import { dataVariable } from '../store/useData.js';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = () => {
  const { islocationSet, restaurantData, getMenu } = dataVariable();
  const navigate = useNavigate();

  useEffect(() => {
    if (!islocationSet && !restaurantData) {
      navigate('/');
    }
  }, [islocationSet, restaurantData, navigate]);

  const handleClick = async (id, obj) => {
    await getMenu(id, obj);
    navigate('/menu');
  };
  return (
    <div className="px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-10 text-center">
        Restaurant List
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {restaurantData?.map((data) => (
          <div
            key={data.restaurant_id}
            className="border-1 border-black p-4 rounded-xl hover:scale-102 cursor-pointer"
            onClick={() =>
              handleClick(data.restaurant_id, { distance: data.distance })
            }
          >
            <div className="flex space-x-5">
              <div className="w-1/3">
                <img
                  src="/img3.jpg"
                  className="size-40"
                />
              </div>
              <div className="p-2 w-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold">
                    {data.restaurant_name}
                  </div>
                  <div className="text-xl text-green-400">
                    &#9733; {data.rating}
                  </div>
                </div>
                <div className="text-xl mb-2">{data.cuisine}</div>
                <div className="flex space-x-4 text-gray-600 text-lg mb-4">
                  <div>{data.location}</div>
                  <div>{data.distance} km</div>
                </div>
                <div className=" flex items-center gap-2 text-lg font-bold">
                  <Ticket className="text-blue-600" />
                  <span>{data.offer}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
