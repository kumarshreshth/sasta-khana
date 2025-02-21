import { useState } from 'react';
import LocationSearch from './LocationSearch';
import RestaurantCard from './RestaurantCard';
import MenuCard from './MenuCard';

const Content = ({ isError, setError, errorValue, setErrorValue }) => {
  const [menuData, setMenuData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {isSuccess ? (
        <div className="p-4">
          {menu ? (
            <MenuCard menuData={menuData} />
          ) : (
            <RestaurantCard
              data={data}
              isError={isError}
              setError={setError}
              errorValue={errorValue}
              setErrorValue={setErrorValue}
              menuData={menuData}
              setMenuData={setMenuData}
              menu={menu}
              setMenu={setMenu}
            />
          )}
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
