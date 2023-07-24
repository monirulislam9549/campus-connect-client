import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [details, setDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        // console.log(data);
      });
  }, [id]);
  return (
    <div>
      <div>
        <div className="mt-6 bg-gray-50">
          <div className=" px-10 py-6 mx-auto">
            {/* <!--author--> */}
            <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
              <img
                className="w-[90%] m-auto shadow-sm h-full transition duration-200 ease-out transform hover:scale-110"
                src={details.collegeImage}
                alt=""
              />

              {/* <!--post categories--> */}
              <div className="flex items-center justify-center mt-4 mb-4">
                <p className="px-2 py-4 font-bold bg-red-400 text-white rounded-lg sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
                  {details.collegeName}
                </p>
              </div>
              <div className="flex justify-start items-center mt-2">
                <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                  Admission Date: {details.admissionDate}
                </p>
                <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
              </div>
              <div className="mt-2">
                <div>
                  {details.researchWorks?.map((work, index) => (
                    <div key={index}>
                      <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">
                        {work.title}
                      </p>
                      <div className="flex items-center mt-6 mb-2">
                        <div>
                          <img src={work.authorImg} alt="" />
                        </div>
                        <div className="flex flex-col ml-2">
                          <p className="font-bold text-gray-700 hover:underline">
                            {work.authors}
                          </p>
                          <p>{work.publishedDate}</p>
                        </div>
                      </div>
                      <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-2 rounded bg-gray-100">
                        <p className="p-4 text-justify">{work.abstract}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl my-10 text-gray-500 font-bold text-center">
                  Our College Event
                </h2>

                <div className="max-w-7xl mx-auto px-5 mb-3 xl:gap-x-8">
                  <div className="mt-6 ">
                    <div>
                      {details.events?.map((event, index) => (
                        <div key={index}>
                          <div className="mx-auto my-5">
                            <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 shadow-sm h-full transition duration-200 ease-out transform hover:scale-110">
                              <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                                <img
                                  className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                                  src={event.eventImg}
                                  alt=""
                                />
                              </div>

                              <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                                <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                                  <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                                    {event.eventName}
                                  </h3>
                                  <p className="text-gray-600 text-justify">
                                    {event.eventDescription}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
