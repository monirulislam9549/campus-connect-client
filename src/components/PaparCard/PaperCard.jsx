const PaperCard = ({ paper }) => {
  const { title, abstract, link, category, publicationDate, authorImg } = paper;
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap">
          <div className="items-start bg-blue-50 p-5 rounded h-96">
            <span className="inline-block py-1 px-2 rounded bg-red-500 text-white text-opacity-75 tracking-widest font-semibold">
              {category}
            </span>
            <h2 className="sm:text-2xl text-xl title-font font-medium my-2">
              {title}
            </h2>
            <p className="mb-4 text-justify">{abstract.slice(0, 150)}...</p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
              <a
                href={link}
                className="text-indigo-400 inline-flex items-center"
              >
                Full Read
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src={authorImg}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center ring-2 ring-blue-500"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium">Holden Caulfield</span>
                <span className="text-xs tracking-widest mt-0.5">
                  {publicationDate}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperCard;
