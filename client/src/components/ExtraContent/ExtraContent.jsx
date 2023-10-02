import React from 'react';

const ExtraContent = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-row  container mx-auto pt-4 md:px-6 overflow-x-scroll">
        <div className="p-1">
          <div className="proximaNova-normal px-5 pt-[6px] pb-[6px] text-center flex-1 bg-black text-white cursor-pointer md:w-full whitespace-nowrap text-lg border-solid border border-black rounded-md hover:bg-gray-800 hover:text-gray-300 transition duration-300">Coaching</div>
        </div>
        <div className="p-1">
          <div className="proximaNova-normal flex-1 px-5 pt-[6px] pb-[6px] text-center cursor-pointer sm:w-full md:w-full whitespace-nowrap text-lg border-solid border border-black rounded-md hover:bg-blue-500 hover:text-white transition duration-300">Tournament</div>
        </div>
        <div className="p-1">
          <div className="proximaNova-normal flex-1 px-5 pt-[6px] pb-[6px] text-center cursor-pointer sm:w-full md:w-full whitespace-nowrap text-lg border-solid border border-black rounded-md hover:bg-green-500 hover:text-white transition duration-300">Grounds</div>
        </div>
        <div className="p-1">
          <div className="proximaNova-normal flex-1 px-5 pt-[6px] pb-[6px] text-center cursor-pointer sm:w-full md:w-full whitespace-nowrap text-lg border-solid border border-black rounded-md hover:bg-yellow-500 hover:text-black transition duration-300">Nets</div>
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
