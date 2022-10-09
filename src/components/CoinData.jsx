import React, { useRef, useEffect, useState } from "react";
//import { Chart_anillos } from "chartjs/Chart_anillos";
import Chart from "chart.js";
import { OptionsH } from "../chartConfigs/chartConfigs2";
import { OptionsHi } from "../chartConfigs/chartConfigs3";
import { Radar } from "react-chartjs-2";
const CoinData = ({ data }) => {
  const chartRef1 = useRef();
  const chartRef2 = useRef();
  const chartRef3 = useRef();
 

  useEffect(() => {
    if (chartRef1 && chartRef1.current) {
      const ctx = document.getElementById("Circulo");
      Chart.defaults.global.defaultFontColor = "white";
      const Circulo = new Chart(chartRef1.current, {
        type: "pie",
        data: {
          datasets: [
            {
              label: "Marktkapitalisierung",
              data: [1, 2],
              backgroundColor: [
                "rgba(74, 305, 194, 0.5)",
                "rgba(714, 305, 194, 0.5)",
              ],
              borderColor: "rgba(194, 05, 194, 0.4)",
              pointRadius: 0,
            },
          ],
          labels: [
            `Coin ${data.market_cap}`,
            `[api endpoint searching] Total Marktkapitalisierung`,
          ],
        },

        options: {
          ...OptionsH,
        },
      });
      return () => {
        Circulo.destroy();
      };
    }
  });

  useEffect(() => {
   
      if (chartRef2 && chartRef2.current) {
        const ctx = document.getElementById("circulo3");
       
        const Circulo2 = new Chart(chartRef2.current, {
          type: "radar",
          data: {
            labels: ["X", "high_24h", "Y", "low_24h"],
            datasets: [
              {
                label: `low_24h`,
                backgroundColor: [0, "transparent"],
                borderColor: ["#00ff00"],
                borderWidth: 2,
                data: [0, 0, `${data.low_24h}`, `${data.high_24h}`],
                lineTension: 0,
                fill: false,
                borderColor: "red",
                backgroundColor: "green",
                borderDash: [5, 5],
                pointBorderColor: "green",
                pointBackgroundColor: "rgba(355,650,0,0.5)",
                pointRadius: 5,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: "rectRounded",
              },
              {
                label: `high_24h`,
                backgroundColor: ["yellow"],
                borderColor: ["yellow"],
                borderWidth: 2,
                data: [`${data.high_24h}`, `${data.low_24h}`, 0],
                lineTension: 0,
                fill: false,
                borderColor: "rgba(122,985,6,6.6)",
                backgroundColor: "orange",
                borderDash: [5, 5],
                pointBorderColor: "blue",
                pointBackgroundColor: "rgba(255,150,0,0.5)",
                pointRadius: 5,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: "rectRounded",
              },
            ],
          },

          options: {
            ...OptionsHi,
          },
        });
        return () => {
          Circulo2.destroy();
        };
      }
    });

  
    useEffect(() => {
      if (chartRef3 && chartRef3.current) {
        const ctx = document.getElementById("Circulo2");
        Chart.defaults.global.defaultFontColor = "white";
        const Circulo3 = new Chart(chartRef3.current, {
          type: "pie",
          data: {
            datasets: [
              {
                label: "Volumen 24H",
                data: [`${data.total_volume}`, `${data.total_volume }`],
                backgroundColor: [
                  "rgba(74, 305, 194, 0.5)",
                  "rgba(714, 305, 194, 0.5)",
                ],
                borderColor: "rgba(194, 05, 194, 0.4)",
                pointRadius: 0,
              },
            ],
            labels: [
              `Coin ${data.total_volume} Coin`,
              `${data.total_volume} Gesamtversorgung`,
            ],
          },

          options: {
            ...OptionsH,
          },
        });
        return () => {
          Circulo3.destroy();
        };
      }
    });

  const renderData = () => {
    if (data) {
      return (
        <div className="my-9 p-2 ml-[210px] rounded-lg bg-[#171924] text-white w-[1550px]  h-[750px] border border-gray-500/10 ">
          <div className="flex flex-row justify-center border border-gray-500/10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-cover">
            <div className="mr-[300px] flex">
              <canvas
                id="Circulo"
                ref={chartRef1}
                width="300"
                height="150"></canvas>
            </div>

            <div>
              <canvas
                id="Circulo2"
                ref={chartRef3}
                width="300"
                height="150"></canvas>
            </div>
            <hr />
          </div>
          <div className="flex flex-row justify-center mt-[40px] border border-gray-500/10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-cover  ">
            <div className="flex flex-row justify-between items-start my-4">
              <div className="flex flex-col">
                <span className="text-muted coin-data-category mr-4">
                  low 24h
                </span>
                <span>{data.low_24h}</span>
              </div>
              <div className="ml-[100px]">
                <canvas
                  id="Circulo"
                  ref={chartRef2}
                  width="500"
                  height="500"></canvas>
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-start my-4 ml-[100px]">
              <div className="mr-[170px] ">
                <span className="text-muted coin-data-category mr-4">
                  high 24h
                </span>
                <div></div>
                <span>{data.high_24h}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-[40px] border border-gray-500/10  rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="flex flex-row justify-between mr-4 my-4">
              <span className="text-muted coin-data-category mr-4">
                Circulating Supply
              </span>
              <span className="mr-[350px]">{data.circulating_supply}</span>
            </div>
            <hr />
          </div>
        </div>
      );
    }
  };

  return <div className="flex">{renderData()}</div>;
};

export default CoinData;
