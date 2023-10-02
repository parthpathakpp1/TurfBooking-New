import React from 'react';
import { useParams } from 'react-router-dom';
import { turfInfo } from '../data/PlaygroundsData';
import { BsFillStarFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { BiCurrentLocation } from 'react-icons/bi';
import {
  GiSoccerBall,
  GiBasketballBall,
  GiCricketBat,
  GiIceSkate,
  GiTennisRacket,

} from 'react-icons/gi';
import { FaParking, FaShower, FaRestroom, FaLightbulb, FaImages, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TurfDetails = () => {
  const { turfId } = useParams();

  const selectedTurf = turfInfo.find((turf) => turfId === turf.turfId);

  if (!selectedTurf) {
    return <div>Turf not found</div>;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="w-[1080px] mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="text-center w-[50%] flex flex-col items-center justify-center relative">
                  <img
                    src={selectedTurf.image}
                    alt="Turf"
                    className="mt-4 rounded-lg h-[60%] w-[80%] transition-transform transform hover:scale-105"
                  />
                  <div className='flex mt-3 w-[80%] justify-between items-center'>
                    <h2 className="text-4xl font-semibold">{selectedTurf.turf_name}</h2>
                    <div className='flex justify-between items-baseline space-x-1'>
                      <BsFillStarFill color='red' className="hover:text-yellow-500 hover:scale-110" />
                      <span className='text-[15px]'>4.5</span>
                    </div>
                  </div>
                </div>
                <div className='w-[50%]'>
                  <div className="mt-4">
                    <p className="text-gray-600 text-lg flex items-center justify-between">
                      <p className='flex items-center'>
                        Location: <IoLocationSharp color='red'/> {selectedTurf.location}
                      </p>
                      <p className='flex items-center text-blue-600 text-sm cursor-pointer hover:underline'>
                        Navigate <BiCurrentLocation color='blue'/>
                      </p>
                    </p>
                    <p className="text-gray-600 text-lg">Rates: {selectedTurf.rates}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-800 text-lg font-semibold">Description:</p>
                    <p className="text-gray-600 text-lg">{selectedTurf.description}</p>
                  </div>
                 
                  <div className="flex flex-col mt-6 p-4 border border_radius border-border_color ">
                  <h2 className="font-semibold text-md md:text-lg">Timing</h2>
                  <div className="mt-2 leading-1">12:00 AM -12:00 AM</div>
                  </div>
                  <div className="mt-6">
                    <button
                      className="bg-primary-color hover:bg-secondary-color text-white font-bold py-3 px-6 rounded-full transform hover:scale-105"
                    >
                      Book Turf
                    </button>
                  </div>
                   </div>
                   
              </div>

              {/* Other Sports Section */}
              <div className='mt-9 border-t border-b border-gray-300 pt-6 pb-6'>
                <h2 className='text-2xl mb-6'>Other Sports</h2>
                <div className='mt-4 flex space-x-4'>
                  <SportIcon icon={<GiSoccerBall />} name="Football" />
                  <SportIcon icon={<GiBasketballBall />} name="Basketball" />
                  <SportIcon icon={<GiCricketBat />} name="Cricket" />
                  <SportIcon icon={<GiIceSkate />} name="Ice Skating" />
                  <SportIcon icon={<GiTennisRacket />} name="Tennis" />
                  <SportIcon icon={<GiTennisRacket />} name="Badminton" />
                  <SportIcon icon={<GiTennisRacket />}  name="Swimming" />
                </div>
              </div>

              {/* Amenities Section */}
              <div className='mt-9 border-t border-b border-gray-300 pt-6 pb-6'>
                <h2 className='text-2xl mb-6'>Amenities</h2>
                <div className='mt-4 flex space-x-4'>
                  <AmenityIcon icon={<FaParking />} name="Parking" />
                  <AmenityIcon icon={<FaShower />} name="Shower Room" />
                  <AmenityIcon icon={<FaRestroom />} name="Restroom" />
                  <AmenityIcon icon={<FaLightbulb />}name="Cafeteria" />
                  <AmenityIcon icon={<FaLightbulb />} name="Flood Lights" />
                  <AmenityIcon icon={<FaImages />} name="Gallery" />
                  <AmenityIcon icon={<FaLock />} name="Locker Room" />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <Footer />
    </>
  );
};

export default TurfDetails;

const SportIcon = ({ icon, name }) => {
  return (
    <div className='group flex items-center py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
      {icon} <span className="ml-2">{name}</span>
    </div>
  );
};

const AmenityIcon = ({ icon, name }) => {
  return (
    <div className='w-[15%] flex items-center py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
      {icon} <span className="ml-2">{name}</span>
    </div>
  );
};
