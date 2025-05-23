import React from "react";
import Image from "next/image"; 

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCHBAR */}
      <div className="hidden md:flex items-center rounded-full gap-2 text-xs ring-[1.5px] ring-gray-500 px-2">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input type="text" placeholder="Search" className=" w-[200px] p-2 outline-none bg-transparent" />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <Image src="/message.png" alt="Messages" width={20} height={20} /> 
        </div>
        <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
            <Image src="/announcement.png" alt="Announcements" width={20} height={20} /> 
            <div className="absolute -top-1 -right-3 w-4 h-4 text-center content-center items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">Octav</span>
            <span className="text-[10px] text-gray-500 text-right">Yoohoo</span>
        </div>
        <Image src="/avatar.png" alt="Profile" width={36} height={36} className="rounded-full" />   
      </div>
    </div>
  );
};

export default Navbar;
