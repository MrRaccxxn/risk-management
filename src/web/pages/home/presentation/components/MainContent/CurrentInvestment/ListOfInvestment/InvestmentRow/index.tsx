import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  simbol: PropTypes.string,
  amountOf: PropTypes.number,
  amountInFiat: PropTypes.number,
  changeInDay: PropTypes.number,
};

const InvestmentRow = () => {
  return (
    <div className="investment__row">
      <div className="box__icon">A</div>
      <span className="token__name">Ethereum</span>
      <span className="token__initials">ETH</span>
      <span className="token__quantity">1.2222421</span>
      <span className="token__price">$ 4,524.44</span>
      <span className="token__percentage"><FontAwesomeIcon icon={faSortUp} size="sm" /> 15.44%</span>
      <span className="token__more__options"><FontAwesomeIcon icon={faEllipsisH} size="sm" /></span>
    </div>
  );
};

InvestmentRow.prototype = propTypes;

export default InvestmentRow;

        