import React from 'react';
import toast from 'react-hot-toast';
import { cartVariable } from '../store/useCart';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout, userInfo } = cartVariable();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged Out');
    navigate('/');
  };
  return (
    <div className="min-h-screen flex justify-center item-center inset-0">
      <div className="flex flex-col m-6 border-2 border-gray-600 w-4/5 rounded-xl">
        <div className="flex justify-center items-center m-5">
          <img
            className="size-80 border-1 border-gray-500 rounded-full"
            src="./UserCover.jpg"
          />
        </div>
        <div className="flex justify-center items-center m-5">
          <div className="flex flex-col space-y-5 m-5 p-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-xl font-bold text-gray-600">Name</div>
              <div className="text-xl font-bold">{userInfo?.name}</div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-xl font-bold text-gray-600">
                Phone Number
              </div>
              <div className="text-xl font-bold">{userInfo?.phoneNumber}</div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-xl font-bold text-gray-600">Email Id</div>
              <div className="text-xl font-bold">{userInfo?.email}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end m-8">
          <div
            className="p-2 bg-red-400 rounded-xl text-xl hover:bg-gray-500 cursor-pointer"
            onClick={handleLogout}
          >
            LogOut
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
