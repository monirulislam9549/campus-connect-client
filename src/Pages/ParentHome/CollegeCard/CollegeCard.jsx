import { useEffect, useState } from "react";
import SingleCard from "../../../components/SingleCard/SingleCard";

const CollegeCard = ({ cardToShow, searchResultData }) => {
  const [cards, setCards] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  useEffect(() => {
    fetch("https://campus-connect-server-azure.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  useEffect(() => {
    setShowSearchResults(searchResultData && searchResultData.length > 0);
  }, [searchResultData]);

  return (
    <div>
      <div className="text-center my-10 px-4 sm:px-8 md:px-16">
        <h2 className="my-5 text-2xl sm:text-3xl md:text-4xl">Top Colleges</h2>
        <p className="px-2 sm:px-8 md:px-12 lg:px-24 mt-5 text-base sm:text-lg md:text-xl">
          Top colleges represent the pinnacle of excellence in education,
          providing students with unparalleled opportunities to achieve their
          academic and professional goals. Discover the best of the best and
          embark on a journey towards a brighter future at these esteemed
          institutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Conditionally render based on showSearchResults */}
        {showSearchResults
          ? searchResultData.map((card) => (
              <SingleCard key={card._id} card={card} />
            ))
          : cards
              .slice(0, cardToShow)
              .map((card) => <SingleCard key={card._id} card={card} />)}
      </div>
    </div>
  );
};

export default CollegeCard;
