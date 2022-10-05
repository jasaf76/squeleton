import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2 `,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm  `,
  tabContainer1: `flex items-center flex- p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm ml-[400px] `,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: `flex items-start `,
  flexBetween: `flex justify-between `,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
};

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chartjs(chartRef.current, {
        type: "bar",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(74, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
      return () => {
        chartInstance.destroy();
      };
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0 mr-2">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-red-500  -mr-[70px]"
                : "text-blue-500 my-0 -mr-[70px] "
            }>
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.flexStart}>
        {renderPrice()}
        <div className={styles.tabContainerWrapper}>
          <div className={styles.flexBetween}>
            <div className={styles.tabContainer}>
              <p className={styles.activeTab}>Price</p>
              <p className={styles.tabItem}>Market Cap</p>
              <p className={styles.tabItem}>Trading View</p>
              <p className={styles.tabItem}>History</p>
            </div>

            <div className={styles.tabContainer1}>
              <p className={styles.activeTab}>
                <button
                  onClick={() => setTimeFormat("24h")}
                  className="btn btn-outline-secondary btn-sm">
                  24h
                </button>
              </p>
              <p className={styles.tabItem}>
                <button
                  onClick={() => setTimeFormat("7d")}
                  className="btn btn-outline-secondary btn-sm mx-1">
                  7d
                </button>
              </p>
              <p className={styles.tabItem}>
                <button
                  onClick={() => setTimeFormat("1y")}
                  className="btn btn-outline-secondary btn-sm">
                  1y
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <canvas ref={chartRef} id="myChart" width={400} height={400}></canvas>
      </div>
    </main>
  );
};

export default HistoryChart;
