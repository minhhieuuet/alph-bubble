import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { convertToUSD } from "@/lib/utils";
import { CoingeckoCoinData } from "@/types/coingecko.type";
import { UTCTimestamp } from "lightweight-charts";
import Chart from "./Chart";
import CoinName from "./CoinName";
import PriceChangeCell from "./PriceChangeCell";

const priceChangeColumns = [
  {
    title: "1h",
    prop: "price_change_percentage_1h_in_currency",
  },
  {
    title: "24h",
    prop: "price_change_percentage_24h_in_currency",
  },
  {
    title: "7d",
    prop: "price_change_percentage_7d_in_currency",
  },
  {
    title: "30d",
    prop: "price_change_percentage_30d_in_currency",
  },
  {
    title: "1y",
    prop: "price_change_percentage_1y_in_currency",
  },
];

export default function Coins({ coins }: { coins: CoingeckoCoinData[] }) {
  const generateChartData = (initialData: number[]) => {
    const interval = 1 * 60 * 60 * 1000;
    const data = initialData.map((value, index) => {
      const formattedTime = (Date.now() + interval * index) as UTCTimestamp;
      return { time: formattedTime, value };
    });
    return data;
  };

  return (
    <div className="py-12 bg-zinc-950" style={{ maxWidth: "1680px", margin: "0 auto", padding: "0.5rem" }}>
      <Table>
        <TableCaption>General info about cryptocurrencies.</TableCaption>
        <TableHeader className="bg-zinc-950 hover:bg-zinc-900">
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Marketcap</TableHead>
            <TableHead>Total volume</TableHead>
            {priceChangeColumns.map((item) => (
              <TableHead key={Math.random()}>{item.title + " %"}</TableHead>
            ))}
            <TableHead>Chart 7d</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.name}>
              <TableCell className="font-medium">
                <CoinName coin={coin} />
              </TableCell>
              <TableCell>{convertToUSD(coin.current_price)}</TableCell>
              <TableCell>{convertToUSD(coin.market_cap)}</TableCell>
              <TableCell>{convertToUSD(coin.total_volume)}</TableCell>
              {priceChangeColumns.map((item) => {
                const value = coin[item.prop as keyof CoingeckoCoinData];
                return (
                  <TableCell key={Math.random()}>
                    <PriceChangeCell value={value as string} />
                  </TableCell>
                );
              })}

              <TableCell className="p-0">
                <Chart data={generateChartData(coin.sparkline_in_7d.price)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
