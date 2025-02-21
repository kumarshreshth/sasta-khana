import { useState } from 'react';
import LocationSearch from './LocationSearch';
import RestaurantCard from './RestaurantCard';

const Content = ({ isError, setError, errorValue, setErrorValue }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div>
      {isSuccess ? (
        <div className="p-4">
          <RestaurantCard data={data} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <LocationSearch
            isError={isError}
            setError={setError}
            errorValue={errorValue}
            setErrorValue={setErrorValue}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            data={data}
            setData={setData}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
