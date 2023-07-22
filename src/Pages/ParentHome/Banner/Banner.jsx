import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiAcademicCap } from "react-icons/hi2";
import { FaTrophy, FaUniversity } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="text-center">
      <Carousel showThumbs={false} showIndicators={false}>
        <div className="relative">
          <img src={`https://i.ibb.co/Wx5cFCz/1.jpg`} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-80 p-2 space-y-5">
            <div>
              <h2 className="text-5xl font-bold">
                WELCOME TO <span className="text-blue-400">UNIVERSITY</span>
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="bg-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black">
                All Courses
              </button>
              <button className="border-2 border-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black hover:border-hidden">
                Read More
              </button>
            </div>
            <div className="flex gap-5 absolute -bottom-32 left-48">
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <HiAcademicCap size={20} className="mx-auto" />
                <span className="mx-auto">Academy</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaUniversity size={20} className="mx-auto"></FaUniversity>
                <span> Admission</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTableCells size={20} className="mx-auto"></FaTableCells>
                <span> Courses</span>
              </div>

              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTrophy size={20} className="mx-auto"></FaTrophy>
                <span>Seminar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={`https://i.ibb.co/PmCL2Vd/3.jpg`} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-80 p-2 space-y-5">
            <div>
              <h2 className="text-5xl font-bold">
                EDUCATION <span className="text-blue-400">MASTER</span>
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="bg-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black">
                All Courses
              </button>
              <button className="border-2 border-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black hover:border-hidden">
                Read More
              </button>
            </div>
            <div className="flex gap-5 absolute -bottom-32 left-48">
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <HiAcademicCap size={20} className="mx-auto" />
                <span className="mx-auto">Academy</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaUniversity size={20} className="mx-auto"></FaUniversity>
                <span> Admission</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTableCells size={20} className="mx-auto"></FaTableCells>
                <span> Courses</span>
              </div>

              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTrophy size={20} className="mx-auto"></FaTrophy>
                <span>Seminar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={`https://i.ibb.co/pZqTJqX/2.jpg`} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-80 p-2 space-y-5">
            <div>
              <h2 className="text-5xl font-bold">
                ADMISSION OPEN <span className="text-blue-400">2023</span>
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="bg-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black">
                All Courses
              </button>
              <button className="border-2 border-blue-400 py-3 px-8 rounded font-medium hover:bg-white hover:text-black hover:border-hidden">
                Read More
              </button>
            </div>
            <div className="flex gap-5 absolute -bottom-32 left-48">
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <HiAcademicCap size={20} className="mx-auto" />
                <span className="mx-auto">Academy</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaUniversity size={20} className="mx-auto"></FaUniversity>
                <span> Admission</span>
              </div>
              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTableCells size={20} className="mx-auto"></FaTableCells>
                <span> Courses</span>
              </div>

              <div className="bg-[#202f40] h-24 w-24 rounded-full flex flex-col justify-center items-center  transition-transform hover:scale-110 duration-700 ease-in-out hover:bg-blue-300">
                <FaTrophy size={20} className="mx-auto"></FaTrophy>
                <span>Seminar</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
