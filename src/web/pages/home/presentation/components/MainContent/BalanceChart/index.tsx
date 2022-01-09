const BalanceChart = () => {
  return (
    <div className="balance__chart">
      <div className="balance__chart__trade"></div>
      <div className="balance__container">
        <div className="balance__title">
          <h2>Dashboard</h2>
          <div className="icon__options">
            <p>a</p>
            <p>b</p>
          </div>
        </div>

        <div className="balance__resume">
          <h1 className="balance__amount">$8,345.34</h1>
          <div className="balance__percentage">
            <p>Balance</p>
            <p>18,04%</p>
            <p>1,545.58</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
