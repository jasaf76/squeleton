
const graphImages = [
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
  "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
];

 const getRandomGraph = () => {
   const rndInt = Math.floor(Math.random() * 10) + 1;
   return graphImages[rndInt];
 };

const CoinRow = ({ coin, index }) => {
  return (
    <table className="text-white  text-center border-b border-gray-800 text-[0.93rem] flex   align-super ml-[200px] mt-4">
      <td className="text-white text-center w-[50px] mr-4">{index}</td>
      <td className="text-white text-center ">
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4 mr-4"
          style={{ width: "14%" }}
        />
        <span className="text-white mr-2 text-center">{coin.name}</span>
        <span className="ms-3 text-zinc-400 text-center ">{coin.symbol}</span>
      </td>
      <td className=" text-white  mr-8 text-center flex-auto">
        ${coin.current_price.toLocaleString()}
      </td>
      <td
        className={
          coin.price_change_percentage_24h > 0
            ? "text-blue-400 mr-8 text-center items-center justify-center"
            : "text-red-400 mr-8 text-center i"
        }>
        {coin.price_change_percentage_24h}
      </td>
      <td
        className={
          coin.market_cap_change_percentage_24h > 0
            ? "text-blue-400 ml-8 text-center"
            : "text-red-400 ml-8 text-center"
        }>
        {coin.market_cap_change_percentage_24h}
      </td>
      <td className="text-center text-white mr-8 mx-auto w-56">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td className="text-center text-white mr-8 mx-auto w-56">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="text-center text-white mr-8 mx-auto w-56">
        ${coin.circulating_supply.toLocaleString()}
      </td>
      <td className="text-center text-white mr-8 mx-auto w-56">
        <img src={getRandomGraph()} width={150} height={60} alt="" />
      </td>
    </table>
  );
};

export default CoinRow;
