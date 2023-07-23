import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../../../components/SingleCard/SingleCard";

const CollegeCard = () => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
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
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
