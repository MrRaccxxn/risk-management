import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';



const propTypes = {
    icon : PropTypes.any.isRequired,
}

const BoxIcon = ( {icon } : {icon : any}) => {
    return(
       <div className="boxicon">
          <FontAwesomeIcon icon={icon} color='white'/>
       </div>
    );
}

BoxIcon.prototype = propTypes;

export default BoxIcon;