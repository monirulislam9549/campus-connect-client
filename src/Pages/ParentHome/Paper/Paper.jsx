import { useEffect, useState } from "react";
import PaperCard from "../../../components/PaparCard/PaperCard";

const Paper = () => {
  const [papers, setPaper] = useState([]);
  useEffect(() => {
    fetch("paper.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPaper(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center my-5 text-2xl sm:text-3xl md:text-4xl">
        Student Research Lecture Series
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {papers.map((paper) => (
          <PaperCard key={paper.id} paper={paper}></PaperCard>
        ))}
      </div>
    </div>
  );
};

export default Paper;
