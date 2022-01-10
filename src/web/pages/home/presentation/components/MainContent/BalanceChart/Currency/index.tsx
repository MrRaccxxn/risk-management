import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const CurrencySelectionable = () => {
  return (
    <div className="currency__selectionable">
      <span className="text__grey">Currency:</span>&nbsp;
      <span className="text__bold font__size">USD</span>&nbsp;&nbsp;
      <FontAwesomeIcon icon={faChevronCircleDown} color="#416EFE" size="lg" />
    </div>
  );
};

export default CurrencySelectionable;
