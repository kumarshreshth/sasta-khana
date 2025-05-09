import toast from 'react-hot-toast';
import TypeWriter from 'typewriter-effect';
import { dataVariable } from '../store/useData.js';
import RestaurantCard from '../component/RestaurantCard';
import MenuCard from '../component/MenuCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { islocationSet, setLocation } = dataVariable();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!islocationSet && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          await setLocation(latitude, longitude);
          toast.success('Location fetched');
          navigate('/restaurant');
        },
        (error) => {
          toast.error(error.message);
        }
      );
    } else {
      toast('Location is already entered');
    }
  };
  return (
    <div>
      <div className="text-gray-800 flex flex-col items-center justify-center py-10 px-6 mb-10">
        <img
          src="/logo.png"
          alt="Logo"
          className="size-80 mb-6 rounded-full"
        />

        <h1 className="text-4xl font-bold mb-4 text-center">
          <span className="text-green-900">
            <TypeWriter
              options={{
                strings: ['Welcome to Saste khana', 'Get Food at best price'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <p className="text-lg mb-6 max-w-xl text-center">
          Compare food prices across Swiggy and Zomato instantly. Save money and
          make smarter choices when ordering your favorite dishes.
        </p>

        <div className="flex flex-col space-y-4">
          <button
            className="px-6 py-3 bg-green-500 text-black rounded-xl hover:bg-gray-500 transition cursor-pointer"
            onClick={handleClick}
          >
            Get Location
          </button>
          <p className="text-gray-600">
            Click the button to get restaurant list nearest to your location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
