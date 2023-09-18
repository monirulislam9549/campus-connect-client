import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CollegeCard from "../CollegeCard/CollegeCard";

const SearchBar = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  // const [searchResultData, setSearchResultData] = useState(
  //   JSON.parse(localStorage.getItem("searchResult")) || []
  // );

  // useEffect(() => {
  //   if (searchResultData.length > 0) {
  //     localStorage.setItem("searchResult", JSON.stringify(searchResultData));
  //   } else {
  //     localStorage.removeItem("searchResult");
  //   }
  // }, [searchResultData]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/searchCollegeName/${searchTerm}`)
      .then((res) => {
        setSearchResultData(res.data);
        setShowNoResultsMessage(res.data.length === 0);
        setSearchResult(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setSearchResultData([]);
        setShowNoResultsMessage(true);
        setSearchResult([]);
      });
  };

  const searchMessage = () => {
    if (showNoResultsMessage) {
      return (
        <p className="text-center text-lg text-red-600 mt-5 font-bold">
          No search results found.
        </p>
      );
    } else if (searchResultData.length > 0) {
      return (
        <p className="text-center text-lg text-red-600 mt-5 font-bold">
          {searchResultData.length} search results found.
        </p>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="rounded-lg bg-blue-400 p-8 w-2/4">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <FaSearch className="pointer-events-none absolute w-5 fill-gray-500 transition"></FaSearch>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="w-full h-14 bg-white pl-2 text-base font-semibold outline-0"
              placeholder="Search college name..."
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        {searchMessage()}
        {searchResultData.length > 0 && (
          <CollegeCard searchResultData={searchResultData}></CollegeCard>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
