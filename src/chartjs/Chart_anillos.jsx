import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
import { OptionsH } from "../chartConfigs/chartConfigs2";




export const Chart_anillos = ({ data }) => {
  const chartRef1 = useRef();

  const [timeFormat, setTimeFormat] = useState("24h");

  useEffect(() => {
    if (chartRef1 && chartRef1.current ) {
    const ctx = document.getElementById("Circulo");
      const Circulo = new Chart(chartRef1.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${ctx.name} price`,
              data: [1,4,7],
              backgroundColor: "rgba(74, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
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
      return () => {
       
        <canvas id="Circulo" ref={chartRef1} width="400" height="400"></canvas>;
      
      };
    }


