import Banner from "./Banner/Banner";
import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import Paper from "./Paper/Paper";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SearchBar></SearchBar>
      <CollegeCard cardToShow={3}></CollegeCard>
      <Gallery></Gallery>
      <Paper></Paper>
    </div>
  );
};

export default Home;
