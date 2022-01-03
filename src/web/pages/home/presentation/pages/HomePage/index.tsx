import AsideBar from "../../components/Asidebar";
import MainContent from "../../components/MainContent";
import SideBar from "../../components/SideBar";

const HomePage = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <MainContent/>
      <AsideBar/>
    </div>
  );
};

export default HomePage;
