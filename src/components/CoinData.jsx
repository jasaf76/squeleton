import React, { useRef, useEffect, useState } from "react";
//import { Chart_anillos } from "chartjs/Chart_anillos";
import Chart from "chart.js";
import { OptionsH } from "../chartConfigs/chartConfigs2";

const CoinData = ({ data }) => {
  const chartRef1 = useRef();
  const [timeFormat, setTimeFormat] = useState("24h");
  const detail = data;

  useEffect(() => {
    if (chartRef1 && chartRef1.current && detail) {
      const ctx = document.getElementById("Circulo");
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
            ` Coin ${data.market_cap}`,
            `${data.market_cap * 2.5533} Total Marktkapitalisierung`,
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

  const renderData = () => {
    if (data) {
      return (
        <div className=" p-2 ml-[330px] rounded-lg bg-[#171924] text-white w-[1350px]  h-[250px] border border-gray-500/10 ">
          <div className="flex flex-row justify-center border border-gray-500/10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-cover">
            <div className="flex flex-row justify-between my-4">
              <span className="text-muted coin-data-category mr-4">
                Market Cap
              </span>

              <span className="mr-[300px]">{data.market_cap}</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between my-4 ">
              <span className="text-muted mr-4">Total Supply</span>
              <span>{data.total_supply}</span>
            </div>
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
          <canvas
            id="Circulo"
            ref={chartRef1}
            width="200"
            height="200"></canvas>
          ;
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

  return <div>{renderData()}</div>;
};

export default CoinData;
