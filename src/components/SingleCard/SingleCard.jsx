import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDate,
    // events,
    researchWorks,
    sportsCategories,
  } = card;
  return (
    <div>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <img src={collegeImage} alt="" />
            </div>

            <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
              Featured
            </span>
          </div>

          <div className="bg-blue-100 p-5">
            <div className="flex items-center">
              <div className="relative">
                <h2 className="text-base font-medium text-gray-800 md:text-lg">
                  {collegeName}
                </h2>
                <p
                  className="mt-2 line-clamp-1 text-sm text-gray-800"
                  title={admissionDate}
                >
                  Admission Date: {admissionDate}
                </p>
              </div>
            </div>

            {/* <div className="mt-2">
              {events &&
                events.map((event, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded p-2 mb-2"
                  >
                    <h3 className="text-lg font-semibold mb-1">
                      {event.eventName}
                    </h3>
                    <p className="text-gray-800">{event.description}</p>
                  </div>
                ))}
            </div> */}

            <div className="border-gray-200 ">
              {researchWorks &&
                researchWorks.map((researchWork, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded p-2 mb-2"
                  >
                    <h3
                      className="text-lg font-semibold mb-1"
                      title={researchWork.title}
                    >
                      {researchWork.title?.slice(0, 25)}...
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Authors: {researchWork.authors}
                    </p>
                    <p className="text-gray-800">
                      Published Date: {researchWork.publishedDate}
                    </p>
                    <p className="text-gray-800">
                      {researchWork.abstract?.slice(0, 100)}...
                    </p>
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-gray-200">
              {sportsCategories.map((sport, index) => (
                <p key={index}>{sport}</p>
              ))}
            </div>
            <div className="flex justify-center items-center mt-6 ">
              <button className="bg-blue-600 text-white py-2 px-4">
                <Link to={`/details/${_id}`}>See Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
