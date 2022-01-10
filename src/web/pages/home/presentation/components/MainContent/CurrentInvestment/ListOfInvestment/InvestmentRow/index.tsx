import PropTypes from "prop-types";

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
      <div>Ethereum</div>
      <div>ETH</div>
      <div>1.2222421</div>
      <div>$ 4,524.44</div>
      <div>15.44%</div>
    </div>
  );
};

InvestmentRow.prototype = propTypes;

export default InvestmentRow;
