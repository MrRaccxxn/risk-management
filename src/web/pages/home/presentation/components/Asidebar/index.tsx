import AsidebarBalance from "./AsidebarBalance";
import AsidebarHeader from "./AsidebarHeader";
import AsidebarMarketPrice from "./AsidebarMarketPrice";

const AsideBar = () => {
    return (
      <div className="asidebar">
          <AsidebarHeader/>
          <AsidebarBalance/>
          <AsidebarMarketPrice/>
      </div>
    );
  };
  
  export default AsideBar;