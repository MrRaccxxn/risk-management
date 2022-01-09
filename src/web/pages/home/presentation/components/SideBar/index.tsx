import BoxIcon from "./BoxIcon";
import { faHome, faCog, faSearch} from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__list__item">
        <div><BoxIcon icon={faHome}/></div>
        <div><BoxIcon icon={faSearch}/></div>
        <div><BoxIcon icon={faCog}/></div>
      </div>
    </div>
  );
};

export default SideBar;
