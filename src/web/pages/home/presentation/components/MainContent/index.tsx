import BalanceChart from "./BalanceChart";
import CurrentInvestments from "./CurrentInvestment";

const MainContent = () =>{
    return <div className="main__content">
        <BalanceChart/>
        <CurrentInvestments/>
    </div>;
}

export default MainContent;