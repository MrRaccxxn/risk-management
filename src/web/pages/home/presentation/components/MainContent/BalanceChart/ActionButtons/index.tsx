import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faDotCircle } from "@fortawesome/free-solid-svg-icons";

const ActionButtons = () => {
  return (
    <div className="action__buttons">
      <div className="action__button primary__button">
        <FontAwesomeIcon icon={faDotCircle} color="white" size="sm" />
        &nbsp;&nbsp;Invest
      </div>
      <div className="action__button secondary__button">
        <FontAwesomeIcon icon={faChartBar} color="#416EFE" size="sm" />
        &nbsp;&nbsp;Full stats
      </div>
    </div>
  );
};

export default ActionButtons;
