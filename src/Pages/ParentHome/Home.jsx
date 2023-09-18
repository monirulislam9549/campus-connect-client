import { useState } from "react";
import Banner from "./Banner/Banner";
import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import Paper from "./Paper/Paper";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div>
      <Banner></Banner>
      <SearchBar setSearchResult={setSearchResult}></SearchBar>
      {searchResult.length === 0 && (
        <>
          <CollegeCard cardToShow={3} searchResult={searchResult} />
          <Gallery />
          <Paper />
        </>
      )}
    </div>
  );
};

export default Home;
