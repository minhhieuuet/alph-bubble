import { CoingeckoCoinData } from "@/types/coingecko.type";
import Bubbles from "./ui/Bubbles";
export const dynamic = "force-dynamic";

async function getCoins(): Promise<CoingeckoCoinData[]> {
  const response = await fetch(
    "https://api.alphtradingbot.com/api/analytics/top-coins"
      );
      const rawData = await response.json();
      // console.log(rawData.data);
      console.log(rawData.data);
  let data = rawData.data.map((coin: any) => {
    
    return {
      id: 1,
      symbol: coin.pair.token1.symbol,
      name: coin.pair.token1.name,
      image: coin.pair.token1.logo,
      price_change_percentage_1h_in_currency: coin.price_change_24h,
      market_cap: coin.pair.liquidity,
    };
  }).filter((coin: any) => coin.id !== null).filter((coin: any) => coin.price_change_percentage_1h_in_currency);
  // unique by symbol, and get the bigger market cap
  const uniqueSymbols: string[] = Array.from(new Set(data.map((a: any) => a.symbol)));
  let coinDataBySymbol = {} as any;
  uniqueSymbols.forEach((symbol) => {
    coinDataBySymbol[symbol] = data.filter((a: any) => a.symbol === symbol).reduce((prev: any, current: any) => {
      return (prev.market_cap > current.market_cap) ? prev : current;
    });
  });
  data = Object.values(coinDataBySymbol);


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
