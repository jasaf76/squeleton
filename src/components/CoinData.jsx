import CMCpriceConverter from "./priceConverter";
import solana from './assets/solana.png'
import Usd from './assets/usdc.png'
const CoinData = ({ data }) => {
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

  return <div>{renderData()}</div>;
};

export default CoinData;
