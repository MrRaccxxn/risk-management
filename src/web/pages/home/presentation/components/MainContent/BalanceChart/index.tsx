import { createChart } from "lightweight-charts";
import { useEffect, useState } from "react";
import formatNumber from "../../../../../../shared/utils/formatters/amount.util";

const defaultProps = {
  containerId: "balance__chart__trade",
};

const BalanceChart = () => {
  let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

  const [balancePrice, setBalancePrice] = useState(0);

  useEffect(() => {
    const chartContainer = document.getElementById(
      BalanceChart.defaultProps.containerId
    )!;

    const chart = createChart(BalanceChart.defaultProps.containerId, {
      width: parseInt(chartContainer.style.width),
      height: parseInt(chartContainer.style.height),
      leftPriceScale:{
        visible: false,
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        visible: false,
      },
      layout: {
        backgroundColor: '#fafafa',
      },
      grid: {
        horzLines: {
          color: "#eee",
          visible: false,
        },
        vertLines: {
          color: "#ffffff",
        },
      },
      crosshair: {
        horzLine: {
          visible: false,
          labelVisible: false,
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 2,
          color: "rgba(32, 38, 46, 0.1)",
          labelVisible: false,
        },
      },
    });
    
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([]);

    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      lineSeries.update({ time: message.E, value: message.p });
      setBalancePrice(message.p);
    };

    ws.onclose = () => {
      console.log("disconnected");
    };

    chart.addAreaSeries({
      topColor: 'rgba(156, 39, 176, 1)',
      bottomColor: 'rgba(41, 121, 255, 0.1)',
      lineColor: 'rgba(156, 39, 176, 0.8)',
      lineWidth: 1,
    });

    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== chartContainer) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    }).observe(chartContainer);
  }, []);

  return (
    <div className="balance__chart">
      <div id="balance__chart__trade"></div>
      <div className="balance__container">
        <div className="balance__title">
          <h2>Dashboard</h2>
          <div className="icon__options">
            <p>a</p>
            <p>b</p>
          </div>
        </div>

        <div className="balance__resume">
          <h1 className="balance__amount">$ {formatNumber(balancePrice)}</h1>
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

BalanceChart.defaultProps = defaultProps;

export default BalanceChart;
