<div className="p-1 px-2 mr-2 rounded-lg bg-[#171924] w-[1350px] ml-[330px] my-4 mb-4">
  <div className="px-2 pt-2">{renderPrice()}</div>
  <div>
    <canvas ref={chartRef} id="myChart" width={500} height={400}></canvas>
  </div>

  <div className="chart-button mt-1">
    <button
      onClick={() => setTimeFormat("24h")}
      className="btn btn-outline-secondary btn-sm">
      24h
    </button>
    <button
      onClick={() => setTimeFormat("7d")}
      className="btn btn-outline-secondary btn-sm mx-1">
      7d
    </button>
    <button
      onClick={() => setTimeFormat("1y")}
      className="btn btn-outline-secondary btn-sm">
      1y
    </button>
  </div>
</div>;
