import PropTypes from "prop-types";

const propTypes = {
  number: PropTypes.number.isRequired,
};

const CircleIcon = ({ number }: { number: number }) => {
  return <div className="circle__icon">{number}</div>;
};

CircleIcon.prototype = propTypes;

export default CircleIcon;
