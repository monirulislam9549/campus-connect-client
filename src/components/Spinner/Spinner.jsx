import { SyncLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <div
        className="
        h-[90vh]
        flex 
        flex-col 
        justify-center 
        items-center"
      >
        <SyncLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Spinner;
