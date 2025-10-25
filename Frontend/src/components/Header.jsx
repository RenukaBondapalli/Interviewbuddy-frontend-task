import React from 'react';
import { Headset, Bell, CircleUserRound } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        <div>
          <div className="flex items-center justify-center w-[76px] h-[38px] border border-black">
            <span className="text-2xl font-bold tracking-wider">LOGO</span>
          </div>
          <span className="text-xs text-gray-400 -mt-1 block">© 2025</span>
        </div>

        <div className="flex items-center space-x-6">
          <Headset className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" strokeWidth={1.5} />
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" strokeWidth={1.5} />
          <div className="p-1.5 bg-purple-100 rounded-full cursor-pointer hover:bg-purple-200">
            <CircleUserRound className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
