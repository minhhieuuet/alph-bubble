import { CoingeckoCoinData } from "@/types/coingecko.type";
import Bubbles from "./ui/Bubbles";
export const dynamic = "force-dynamic";

async function getCoins(): Promise<CoingeckoCoinData[]> {
  const response = await fetch(
    "https://api.mobula.io/api/1/market/query/token?sortBy=volume_24h&sortOrder=desc&blockchain=Alephium"
      );
  const rawData = await response.json();
  // console.log(rawData.data);
  const data = rawData.data.map((coin: any) => {
    
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: coin.logo,
      price_change_percentage_1h_in_currency: coin.pairs[0].price_change_24h,
      market_cap: coin.pairs[0].liquidity,
    };
  }).filter((coin: any) => coin.id !== null);
  console.log(data);

  // const data = await response.json();
  // const data = [{
  //   "id": "bitcoin",
  //   "symbol": "btc",
  //   "name": "Bitcoin",
  //   "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  //   "price_change_percentage_1h_in_currency": 0.6599942315009569,
  //   }]

    //@ts-ignore
  return data;
}

export default async function Main() {
  const coins = await getCoins();

  return <Bubbles coins={coins} />;
}
