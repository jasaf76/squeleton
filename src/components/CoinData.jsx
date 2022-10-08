import React, { useRef, useEffect, useState } from "react";
//import { Chart_anillos } from "chartjs/Chart_anillos";
import Chart from "chart.js";
import { OptionsH } from "../chartConfigs/chartConfigs2";

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
        const ctx = document.getElementById("Circulo2");
        Chart.defaults.global.defaultFontColor = "white";
        const Circulo2 = new Chart(chartRef2.current, {
          type: "doughnut",
          data: {
            datasets: [
              {
                label: "Gesamtversorgung",
                data: [`${data.total_supply}`, `${data.total_volume}`],
                backgroundColor: [
                  "rgba(74, 305, 194, 0.5)",
                  "rgba(714, 305, 194, 0.5)",
                ],
                borderColor: "rgba(194, 05, 194, 0.4)",
                pointRadius: 0,
              },
            ],
            labels: [
              `Coin ${data.total_supply} Coin`,
              `${data.total_supply / 8} Gesamtversorgung`,
            ],
          },

          options: {
            ...OptionsH,
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
        const Circulo2 = new Chart(chartRef3.current, {
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
          Circulo2.destroy();
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
            <div className="mr-[300px]">
              <canvas
                id="Circulo"
                ref={chartRef2}
                width="300"
                height="150"></canvas>
            </div>
            <div >
              <canvas
                id="Circulo"
                ref={chartRef3}
                width="300"
                height="150"></canvas>
            </div>
            <hr />
          </div>
          <div className="flex flex-row justify-center mt-[40px] border border-gray-500/10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-cover  ">
            <div className="flex flex-row justify-between items-start my-4">
              <div className="ml-[170px] ">
                <span className="text-muted coin-data-category mr-4">
                  Volume(24H)
                </span>
                <span className="mr-[400px]">{data.total_volume}</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-start my-4">
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
            <div className="flex flex-col">
              <span className="text-muted coin-data-category mr-4">
                low 24h
              </span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div className="flex">{renderData()}</div>;
};

export default CoinData;
