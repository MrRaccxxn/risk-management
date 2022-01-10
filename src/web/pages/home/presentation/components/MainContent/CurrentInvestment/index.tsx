import CircleIcon from "./CircleIcon";
import ListOfInvestment from "./ListOfInvestment";

const CurrentInvestments = () => {
  return (
    <div className="current_investments container">
      <div className="title">
        <CircleIcon number={3} />
        <div className="text__title">&nbsp;My investments</div>
      </div>

      <ListOfInvestment />
    </div>
  );
};

export default CurrentInvestments;
