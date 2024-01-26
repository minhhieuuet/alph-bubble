import { Ticker } from "@/types/coingecko.type";
import Image from "next/image";

type Props = {
  ticker: Ticker;
};

export default function ExchangeName({ ticker }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="relative w-8 h-8">
        <Image sizes="width:50px" fill src={exchanges[ticker.market.name as keyof typeof exchanges] ?? exchanges["Binance"]} alt={"image" + ticker.coin_id} />
      </div>
      <span className="uppercase">{ticker.market.name}</span>
    </div>
  );
}

const exchanges = {
  OKX: "https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377",
  Bybit: "https://assets.coingecko.com/markets/images/698/small/bybit_spot.png?1629971794",
  "Coinbase Exchange": "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875",
  HTX: "https://assets.coingecko.com/markets/images/25/small/logo_V_colour_black.png?1669177364",
  KuCoin: "https://assets.coingecko.com/markets/images/61/small/kucoin.png?1640584259",
  Kraken: "https://assets.coingecko.com/markets/images/29/small/kraken.jpg?1584251255",
  "Crypto.com Exchange": "https://assets.coingecko.com/markets/images/589/small/h2oMjPp6_400x400.jpg?1669699705",
  Bitstamp: "https://assets.coingecko.com/markets/images/9/small/bitstamp.jpg?1519627979",
  Bitfinex: "https://assets.coingecko.com/markets/images/4/small/BItfinex.png?1615895883",
  "Binance US": "https://assets.coingecko.com/markets/images/469/small/Binance.png?1568875842",
  Binance: "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
  "Gate.io": "https://assets.coingecko.com/markets/images/60/small/gate_io_logo1.jpg?1654596784",
  CoinW: "https://assets.coingecko.com/markets/images/1172/small/coinw.jpeg?1687506651",
  MEXC: "https://assets.coingecko.com/markets/images/409/small/MEXC_logo_square.jpeg?1673000123",
  BingX: "https://assets.coingecko.com/markets/images/812/small/YtFwQwJr_400x400.jpg?1646056092",
  Bitget: "https://assets.coingecko.com/markets/images/540/small/2023-07-25_21.47.43.jpg?1690293531",
  Deepcoin: "https://assets.coingecko.com/markets/images/1005/small/deepcoin.jpeg?1689269658",
  Coinstore: "https://assets.coingecko.com/markets/images/747/small/coinstore.jpeg?1639530357",
  PointPay: "https://assets.coingecko.com/markets/images/1060/small/pointpay.png?1676882506",
  Gemini: "https://assets.coingecko.com/markets/images/50/small/gemini.png?1605704107",
  BitoPro: "https://assets.coingecko.com/markets/images/358/small/bitopro_coingecko_250x250_%281%29.png?1575884378",
  BitMart: "https://assets.coingecko.com/markets/images/239/small/Bitmart.png?1628066397",
  "XT.COM": "https://assets.coingecko.com/markets/images/404/small/logo400x400.png?1575881839",
  WhiteBIT: "https://assets.coingecko.com/markets/images/418/small/800_800.jpg?1688004634",
  P2B: "https://assets.coingecko.com/markets/images/251/small/ow0xng56_400x400.jpeg?1664939403",
  Coinsbit: "https://assets.coingecko.com/markets/images/267/small/Coinsbit.png?1605153697",
  EXMO: "https://assets.coingecko.com/markets/images/59/small/tt_ava.jpg?1669360697",
  Phemex: "https://assets.coingecko.com/markets/images/564/small/Phemex_logo_4.png?1641357471",
  "Dex-Trade": "https://assets.coingecko.com/markets/images/380/small/Dex-Trade_logo_new.png?1599629803",
  QMall: "https://assets.coingecko.com/markets/images/1108/small/qmall.jpeg?1680079189",
  "C-Patex": "https://assets.coingecko.com/markets/images/246/small/Exchange.jpg?1681192003",
  "WOO X": "https://assets.coingecko.com/markets/images/683/small/woo.png?1677468948",
  Bitbank: "https://assets.coingecko.com/markets/images/122/small/bitbank.jpg?1521186278",
  Bullish: "https://assets.coingecko.com/markets/images/905/small/bullish_com.png?1655198360",
  "Max Maicoin": "https://assets.coingecko.com/markets/images/218/small/max.jpg?1533888641",
  Fastex: "https://assets.coingecko.com/markets/images/1091/small/fastex.png?1678776256",
  Bitso: "https://assets.coingecko.com/markets/images/8/small/Bitso-icon-dark.png?1581909156",
  Indodax: "https://assets.coingecko.com/markets/images/3/small/logogram-Indodax-new-_JPG_format.jpg?1580974378",
  Luno: "https://assets.coingecko.com/markets/images/33/small/luno.jpg?1519996997",
  VALR: "https://assets.coingecko.com/markets/images/1036/small/valr.png?1674711237",
  "Kuna Exchange": "https://assets.coingecko.com/markets/images/97/small/kuna_exchange.png?1545126178",
  "Coins.ph": "https://assets.coingecko.com/markets/images/999/small/coinspro.png?1668488887",
  "Blockchain.com": "https://assets.coingecko.com/markets/images/613/small/unnamedddd.png?1610503741",
  NiceHash: "https://assets.coingecko.com/markets/images/546/small/logo_small_light.png?1637836622",
  BitMEX: "https://assets.coingecko.com/markets/images/866/small/bitmex.jpeg?1652794708",
  BitDelta: "https://assets.coingecko.com/markets/images/1317/small/BitDelta_Logo_200x200.png?1697427470",
  LBank: "https://assets.coingecko.com/markets/images/118/small/LBank_logo.png?1666234663",
  DigiFinex: "https://assets.coingecko.com/markets/images/225/small/DF_logo.png?1594264355",
  Upbit: "https://assets.coingecko.com/markets/images/117/small/upbit.png?1520388800",
  BTSE: "https://assets.coingecko.com/markets/images/464/small/BTSE.jpg?1568012415",
  Bitrue: "https://assets.coingecko.com/markets/images/254/small/unnamed_%281%29.png?1656295820",
  Toobit: "https://assets.coingecko.com/markets/images/1139/small/Toobit_logo400X400.png?1686549566",
  Tidex: "https://assets.coingecko.com/markets/images/43/small/favicon.png?1651817092",
  "AscendEX (BitMax)": "https://assets.coingecko.com/markets/images/277/small/%E5%8E%9F%E8%89%B2.png?1650557355",
  BitVenus: "https://assets.coingecko.com/markets/images/1253/small/BitVenus.png?1692847633",
  FameEX: "https://assets.coingecko.com/markets/images/1018/small/fameex.jpg?1678950802",
  Azbit: "https://assets.coingecko.com/markets/images/787/small/logo.png?1679018698",
  BigONE: "https://assets.coingecko.com/markets/images/100/small/qcFFufEY_400x400.jpg?1561103345",
  Poloniex: "https://assets.coingecko.com/markets/images/37/small/poloniex.png?1663310089",
  bitFlyer: "https://assets.coingecko.com/markets/images/5/small/bitFlyer-logo.png?1643256033",
  Cryptology: "https://assets.coingecko.com/markets/images/287/small/logo-symbol.png?1669975181",
  CoinEx: "https://assets.coingecko.com/markets/images/135/small/coinex.jpg?1527737297",
  Bitkub: "https://assets.coingecko.com/markets/images/249/small/bitkub.png?1537180687",
  Kanga: "https://assets.coingecko.com/markets/images/852/small/KaNGa_logo.png?1681790128",
  FinexBox: "https://assets.coingecko.com/markets/images/318/small/finexbox20190920.jpg?1568959220",
  "Bitcointry Exchange": "https://assets.coingecko.com/markets/images/1231/small/Bitcointry.jpg?1693215743",
  "Independent Reserve": "https://assets.coingecko.com/markets/images/389/small/x_V5Jquo_400x400.png?1556071437",
  Korbit: "https://assets.coingecko.com/markets/images/28/small/korbit-logo.png?1584091827",
  BTCMarkets: "https://assets.coingecko.com/markets/images/237/small/BTCMarkets_logo2.png?1677732205",
  Stormgain: "https://assets.coingecko.com/markets/images/608/small/CpDGk9Hn_400x400.png?1607582976",
  "Bittrex Global": "https://assets.coingecko.com/markets/images/10/small/BG-color-250x250_icon.png?1596167574",
  "CEX.IO": "https://assets.coingecko.com/markets/images/56/small/main-icon.png?1617267530",
  "Delta Exchange": "https://assets.coingecko.com/markets/images/642/small/delta_spot.jpg?1617283005",
  Okcoin: "https://assets.coingecko.com/markets/images/415/small/okcoin_Logomark_SatoshiBlack.png?1619574335",
  Coinmetro: "https://assets.coingecko.com/markets/images/386/small/Coinmetro_Exchange_Logo_%282%29.png?1646280101",
  Emirex: "https://assets.coingecko.com/markets/images/592/small/Emirex.png?1602067691",
  "Uniswap V3 (Ethereum)": "https://assets.coingecko.com/markets/images/665/small/uniswap-v3.png?1620241698",
  LATOKEN: "https://assets.coingecko.com/markets/images/124/small/latoken.png?1685942070",
  Pionex: "https://assets.coingecko.com/markets/images/1026/small/pionex.png?1673508138",
  Biconomy: "https://assets.coingecko.com/markets/images/633/small/biconomy-cex.png?1642930152",
  "CoinTR Pro": "https://assets.coingecko.com/markets/images/1028/small/cointr.png?1673681204",
  BitMake: "https://assets.coingecko.com/markets/images/1169/small/bitmake.jpeg?1687159763",
  Bithumb: "https://assets.coingecko.com/markets/images/6/small/bithumb_BI.png?1573104549",
  "Uniswap V3 (Arbitrum One)": "https://assets.coingecko.com/markets/images/702/small/uniswap-v3.png?1631616149",
  Bitvavo: "https://assets.coingecko.com/markets/images/714/small/bitvavo-mark-square-black.png?1633688872",
  "Bitci TR": "https://assets.coingecko.com/markets/images/450/small/Bitci.jpg?1564137859",
  "Uniswap V2 (Ethereum)": "https://assets.coingecko.com/markets/images/535/small/256x256_Black-1.png?1590893262",
  "Pancakeswap V3 (BSC)": "https://assets.coingecko.com/markets/images/1111/small/pancakeswap.jpeg?1680396625",
  CITEX: "https://assets.coingecko.com/markets/images/390/small/CITEX-LOGO.png?1564028815",
  Paribu: "https://assets.coingecko.com/markets/images/136/small/paribu.jpg?1527734779",
  "BtcTurk | Kripto": "https://assets.coingecko.com/markets/images/223/small/btctrurk_kripto.png?1689655713",
  "ProBit Global": "https://assets.coingecko.com/markets/images/370/small/probit.png?1594886584",
  "PancakeSwap (v2)": "https://assets.coingecko.com/markets/images/687/small/pancakeswap.jpeg?1626060212",
  Coincheck: "https://assets.coingecko.com/markets/images/18/small/Coincheck.jpg?1519703836",
  "Uniswap V3 (Polygon)": "https://assets.coingecko.com/markets/images/752/small/uniswap-polygon.png?1640329417",
  Bit2Me: "https://assets.coingecko.com/markets/images/1137/small/bit2me.png?1683531473",
  PulseX: "https://assets.coingecko.com/markets/images/1148/small/pulsex.jpeg?1684462203",
  Coinone: "https://assets.coingecko.com/markets/images/20/small/coinone_circle_500x500.png?1606460853",
  "Pancakeswap V3 (zkSync)": "https://assets.coingecko.com/markets/images/1193/small/pancakeswap.jpeg?1690507240",
  "Camelot V3": "https://assets.coingecko.com/markets/images/1119/small/camelot.jpeg?1681439700",
  "GMO Japan": "https://assets.coingecko.com/markets/images/430/small/gmo_z_com.png?1561112572",
  Retro: "https://assets.coingecko.com/markets/images/1204/small/retro.png?1691142507",
  "Vertex Protocol (Spot)": "https://assets.coingecko.com/markets/images/1293/small/vertex.png?1697934371",
  "Canto Dex": "https://assets.coingecko.com/markets/images/943/small/canto.jpeg?1661216713",
  Bitexen: "https://assets.coingecko.com/markets/images/693/small/Bitexen_Logo_Short.png?1634198471",
  Osmosis: "https://assets.coingecko.com/markets/images/684/small/osmosis-dex.jpeg?1624850295",
  BitTrade: "https://assets.coingecko.com/markets/images/431/small/BitTrade.jpg?1680844242",
  Sushiswap: "https://assets.coingecko.com/markets/images/576/small/2048x2048_Logo.png?1609208464",
  itBit: "https://assets.coingecko.com/markets/images/26/small/itbit.png?1519810172",
  BitStorage: "https://assets.coingecko.com/markets/images/394/small/Bitstorage.png?1680587088",
  XeggeX: "https://assets.coingecko.com/markets/images/1299/small/XeggeX_Logo_200.png?1696411810",
  "Metal X": "https://assets.coingecko.com/markets/images/1309/small/logo.png?1696844749",
  "Velodrome Finance v2": "https://assets.coingecko.com/markets/images/1181/small/velodrome.jpeg?1688608560",
  "Agni Finance": "https://assets.coingecko.com/markets/images/1199/small/agni.png?1690860421",
  "Nonkyc.io": "https://assets.coingecko.com/markets/images/1281/small/NKYC-Logo.png?1695181813",
  WazirX: "https://assets.coingecko.com/markets/images/274/small/wazirx.jpg?1540450020",
  "CoinJar Exchange": "https://assets.coingecko.com/markets/images/176/small/Logomark_2022200h_thumb.png?1657688357",
  "Deribit Spot": "https://assets.coingecko.com/markets/images/1144/small/deribit.jpeg?1683796094",
  "Mercado Bitcoin": "https://assets.coingecko.com/markets/images/34/small/logo_MB_hexagono.png?1657255217",
  Zaif: "https://assets.coingecko.com/markets/images/99/small/zaif.png?1519627467",
  CoinDCX: "https://assets.coingecko.com/markets/images/520/small/coindcx.png?1585318880",
  Bitlo: "https://assets.coingecko.com/markets/images/968/small/bitlo-logo-b.png?1677732049",
  Bittime: "https://assets.coingecko.com/markets/images/1296/small/1024.png?1696490976",
  Foxbit: "https://assets.coingecko.com/markets/images/864/small/foxbit.jpeg?1652175698",
  "Orderly Network": "https://assets.coingecko.com/markets/images/1015/small/Orderly_Network_Brandmark_Transparent.png?1671762725",
  Coinlist: "https://assets.coingecko.com/markets/images/587/small/black.png?1683178461",
  "SmarDex (BSC)": "https://assets.coingecko.com/markets/images/1229/small/SDEX_logo_transparent.png?1692170709",
  "SmarDex (Polygon)": "https://assets.coingecko.com/markets/images/1230/small/SDEX_logo_transparent.png?1692170765",
  "Rhino.fi": "https://assets.coingecko.com/markets/images/511/small/COINGECKO_DVF_200x200.jpeg?1657853638",
  "CrowdSwap (Polygon)": "https://assets.coingecko.com/markets/images/1274/small/1500-1500-01.png?1694500643",
  Fairdesk: "https://assets.coingecko.com/markets/images/1047/small/fairdesk.jpeg?1675753897",
  Bitforex: "https://assets.coingecko.com/markets/images/214/small/BitForex-Logo.png?1573808227",
  "Quickswap (v3)": "https://assets.coingecko.com/markets/images/982/small/quickswap_latest.png?1698249966",
  "Maverick Protocol": "https://assets.coingecko.com/markets/images/1160/small/maverick.png?1686556453",
  "FMFW.io": "https://assets.coingecko.com/markets/images/467/small/fmfw.png?1635491491",
  "ApeX Pro": "https://assets.coingecko.com/markets/images/1010/small/apex_pro.png?1670999139",
  "TraderJoe V2.1 (Avalanche)": "https://assets.coingecko.com/markets/images/1124/small/traderjoe.png?1682383556",
  "Curve (Ethereum)": "https://assets.coingecko.com/markets/images/538/small/Curve.png?1591605481",
  "Balancer V2": "https://assets.coingecko.com/markets/images/673/small/balancer-v2.png?1621005731",
  "Pancakeswap V3 (Ethereum)": "https://assets.coingecko.com/markets/images/1112/small/pancakeswap.jpeg?1680397048",
  "Uniswap V3 (Optimism)": "https://assets.coingecko.com/markets/images/725/small/uniswap-v3.png?1634896204",
  Orca: "https://assets.coingecko.com/markets/images/691/small/orca.png?1628047248",
  Katana: "https://assets.coingecko.com/markets/images/731/small/ronin-katana.png?1636437019",
  Bitazza: "https://assets.coingecko.com/markets/images/837/small/btzlogo200x200_darkgreen.png?1648702264",
  "TraderJoe V2.1 (Arbitrum)": "https://assets.coingecko.com/markets/images/1126/small/traderjoe.png?1682383857",
  TokoCrypto: "https://assets.coingecko.com/markets/images/501/small/toko.png?1578328877",
  Ace: "https://assets.coingecko.com/markets/images/1016/small/ace.jpeg?1671694541",
  Koinbx: "https://assets.coingecko.com/markets/images/751/small/photo_2023-02-19_12-57-51.jpg?1678415170",
  Tokpie: "https://assets.coingecko.com/markets/images/436/small/logo_circle_100x100.png?1562226767",
  NovaDAX: "https://assets.coingecko.com/markets/images/328/small/preview-full-novadax-exchange.jpg?1575440958",
  "THENA FUSION": "https://assets.coingecko.com/markets/images/1123/small/thena.jpeg?1681986498",
  "DODO (BSC)": "https://assets.coingecko.com/markets/images/640/small/41tgsq69_400x400.png?1618372654",
  Cetus: "https://assets.coingecko.com/markets/images/1134/small/cetus.png?1683252681",
  "Kyberswap Elastic (Arbitrum)": "https://assets.coingecko.com/markets/images/963/small/kyberswap.jpeg?1662695820",
  "Uniswap V3 (BSC)": "https://assets.coingecko.com/markets/images/1092/small/uniswap.jpeg?1678933206",
  BitBNS: "https://assets.coingecko.com/markets/images/541/small/HS7eNJdt_400x400.jpg?1592294824",
  "Uniswap V3 (Base)": "https://assets.coingecko.com/markets/images/1212/small/uniswap-v3.jpg?1691463518",
  Nominex: "https://assets.coingecko.com/markets/images/530/small/logo-200x200.png?1587543672",
  "PulseX V2": "https://assets.coingecko.com/markets/images/1176/small/oYHR8Nqd_400x400.jpg?1688440549",
  "DODO (Arbitrum)": "https://assets.coingecko.com/markets/images/707/small/dodo_logo.png?1632849982",
  Vindax: "https://assets.coingecko.com/markets/images/388/small/uToizY7z_400x400.jpg?1556070669",
  "Uniswap V3 (Avalanche)": "https://assets.coingecko.com/markets/images/1182/small/uniswap.jpeg?1689299026",
  GoPax: "https://assets.coingecko.com/markets/images/144/small/gopax.jpg?1523527412",
  "Kyberswap Elastic (Optimism)": "https://assets.coingecko.com/markets/images/962/small/kyberswap.jpeg?1662695089",
  Biswap: "https://assets.coingecko.com/markets/images/745/small/rXUu-spA_400x400.jpeg?1654851329",
  Phux: "https://assets.coingecko.com/markets/images/1202/small/phux.jpeg?1690946772",
  "Currency.com": "https://assets.coingecko.com/markets/images/512/small/Currency.com_200x200.png?1582086630",
  TradeOgre: "https://assets.coingecko.com/markets/images/101/small/tradeogre.jpeg?1521428643",
  ApertureSwap: "https://assets.coingecko.com/markets/images/1306/small/aperture-finance.jpeg?1696817880",
  "Kyberswap Elastic (Polygon)": "https://assets.coingecko.com/markets/images/959/small/kyberswap.jpeg?1662616218",
  "KuCoin Futures": "https://assets.coingecko.com/markets/images/471/small/kucoin.png?1640588148",
  Quickswap: "https://assets.coingecko.com/markets/images/629/small/quickswap_latest.png?1698250022",
  "DODO (Polygon)": "https://assets.coingecko.com/markets/images/709/small/dodo_logo.png?1633078678",
  Camelot: "https://assets.coingecko.com/markets/images/1007/small/vj5DIMhP_400x400.jpeg?1670561015",
  "Sushiswap (Arbitrum One)": "https://assets.coingecko.com/markets/images/701/small/sushiswap3.png?1631339015",
  DIFX: "https://assets.coingecko.com/markets/images/1138/small/difx.png?1683531591",
  ALEX: "https://assets.coingecko.com/markets/images/951/small/alexgo.png?1661757431",
  "Fraxswap (Ethereum)": "https://assets.coingecko.com/markets/images/911/small/JjqQ9ROz_400x400.jpeg?1656568640",
  "Pancakeswap V3 (Arbitrum)": "https://assets.coingecko.com/markets/images/1225/small/pancakeswap.jpeg?1691741776",
  "VVS Finance": "https://assets.coingecko.com/markets/images/736/small/vvs-finance.jpeg?1636702806",
  "Trader Joe": "https://assets.coingecko.com/markets/images/692/small/traderjoe.png?1628152581",
  JediSwap: "https://assets.coingecko.com/markets/images/1305/small/jediswap.jpeg?1696573273",
  "Pancakeswap V3 (Base)": "https://assets.coingecko.com/markets/images/1264/small/pancakeswap.jpeg?1693533907",
  "Pancakeswap (Stableswap)": "https://assets.coingecko.com/markets/images/1035/small/pancakeswap.jpeg?1674702488",
  "Pancakeswap V3 (Linea)": "https://assets.coingecko.com/markets/images/1258/small/pcs.jpeg?1692948153",
  "KyberSwap Elastic (Ethereum)": "https://assets.coingecko.com/markets/images/957/small/kyberswap.jpeg?1662697416",
  FatBTC: "https://assets.coingecko.com/markets/images/295/small/363.png?1540287518",
  "Kyberswap Elastic (Linea)": "https://assets.coingecko.com/markets/images/1226/small/kyberswap.jpeg?1692077216",
  Mute: "https://assets.coingecko.com/markets/images/1104/small/mute.io.jpg?1679899843",
  "Kujira Fin": "https://assets.coingecko.com/markets/images/918/small/FIN-Kujira_200w.png?1658214729",
  Pangolin: "https://assets.coingecko.com/markets/images/627/small/Pangolin_Logo_Yellow_Dark_Round.png?1669695691",
  "Quickswap (Polygon zkEVM)": "https://assets.coingecko.com/markets/images/1109/small/quickswap_latest.png?1698249924",
  Dexalot: "https://assets.coingecko.com/markets/images/824/small/DEXALOT-Logo-Mark_4x.png?1679032482",
  Coinzoom: "https://assets.coingecko.com/markets/images/656/small/Up7Yiexp_400x400.png?1619165177",
  "Sushiswap V3 (Arbitrum)": "https://assets.coingecko.com/markets/images/1162/small/sushiswap.png?1686560849",
  KickEX: "https://assets.coingecko.com/markets/images/635/small/KickEX_logo.png?1652324492",
  "SushiSwap V3 (Base)": "https://assets.coingecko.com/markets/images/1203/small/lFs3rTxB_400x400.png?1690958069",
  "Aerodrome (Base)": "https://assets.coingecko.com/markets/images/1271/small/aerodrome.jpeg?1694411971",
  Swappi: "https://assets.coingecko.com/markets/images/865/small/swappi.jpeg?1652427205",
  "FusionX V3": "https://assets.coingecko.com/markets/images/1184/small/fusionxv3.png?1689653834",
  Bakeryswap: "https://assets.coingecko.com/markets/images/626/small/bakeryswap.png?1613740980",
  "Stellaswap (V3)": "https://assets.coingecko.com/markets/images/1052/small/stellaswap.jpeg?1675929920",
  KLAYSwap: "https://assets.coingecko.com/markets/images/1008/small/klayswap.jpeg?1670810834",
  BabySwap: "https://assets.coingecko.com/markets/images/853/small/babyswap.jpeg?1650853057",
  "Pancakeswap (Aptos)": "https://assets.coingecko.com/markets/images/1059/small/pancakeswap.jpeg?1676882255",
  "Nomiswap (Stable)": "https://assets.coingecko.com/markets/images/997/small/nomiswap.jpeg?1667789286",
  ApeSwap: "https://assets.coingecko.com/markets/images/651/small/APESWAP.png?1618806870",
  "Sushiswap (Polygon POS)": "https://assets.coingecko.com/markets/images/668/small/sushiswap-polygon-matic.png?1620476993",
  "Pancakeswap V3 (Polygon zkEVM)": "https://assets.coingecko.com/markets/images/1174/small/pancakeswap.jpeg?1688045283",
  SpookySwap: "https://assets.coingecko.com/markets/images/662/small/spookyswap.png?1639279823",
  THENA: "https://assets.coingecko.com/markets/images/1039/small/thena.png?1675060616",
  "Digitalexchange.id": "https://assets.coingecko.com/markets/images/1265/small/digitalexchange_logo.png?1693966258",
  ArthSwap: "https://assets.coingecko.com/markets/images/877/small/logo_colour_bk.png?1653873751",
  Netswap: "https://assets.coingecko.com/markets/images/760/small/netswap.png?1641437122",
  "MMFinance (Cronos)": "https://assets.coingecko.com/markets/images/764/small/g7GDg3bv_400x400.jpg?1641539227",
  Lykke: "https://assets.coingecko.com/markets/images/111/small/transparent_star_200x200.png?1651142872",
  Velocore: "https://assets.coingecko.com/markets/images/1116/small/velocore.png?1680942683",
  "Sushiswap (Arbitrum Nova)": "https://assets.coingecko.com/markets/images/944/small/sushiswap-arbitrum-nova.png?1661179683",
  "PearlFi V1.5": "https://assets.coingecko.com/markets/images/1227/small/pearlfi.jpeg?1692084650",
  "Kyberswap Elastic (Avalanche)": "https://assets.coingecko.com/markets/images/961/small/kyberswap.jpeg?1662693719",
  HorizonDEX: "https://assets.coingecko.com/markets/images/1192/small/horizondex.jpg?1690437593",
  "Sushiswap V3 (Polygon)": "https://assets.coingecko.com/markets/images/1163/small/sushiswap.png?1686561299",
  "SmarDex (Arbitrum)": "https://assets.coingecko.com/markets/images/1228/small/smardex.png?1693821976",
  SpartaDEX: "https://assets.coingecko.com/markets/images/1213/small/sparta-logo-200x200.jpg?1691463118",
  PearlFi: "https://assets.coingecko.com/markets/images/1170/small/pearlfi.jpeg?1687232949",
  "Velodrome Finance": "https://assets.coingecko.com/markets/images/933/small/velodrome-finance.png?1660261754",
  "Trader Joe v2": "https://assets.coingecko.com/markets/images/1030/small/TraderJoe.png?1674093446",
  Wigoswap: "https://assets.coingecko.com/markets/images/819/small/wigoswap-dex.jpeg?1646109656",
  Nomiswap: "https://assets.coingecko.com/markets/images/909/small/Wxo7M8g4_400x400.jpeg?1656297959",
  "Sushiswap V3 (Arbitrum Nova)": "https://assets.coingecko.com/markets/images/1179/small/sushiswap.png?1688545955",
  "Alien Base": "https://assets.coingecko.com/markets/images/1244/small/alienbase.jpeg?1692584883",
  "Kyberswap Classic (Bittorent)": "https://assets.coingecko.com/markets/images/1002/small/kyberswap.jpeg?1669095231",
  "Sushiswap V3 (Optimism)": "https://assets.coingecko.com/markets/images/1161/small/sushiswap.png?1686559753",
  StellaSwap: "https://assets.coingecko.com/markets/images/797/small/stellaswap.jpg?1644378572",
  "Defi Kingdoms (Crystalvale)": "https://assets.coingecko.com/markets/images/846/small/dfk_crystalvale_logo.png?1649052617",
  XSwap: "https://assets.coingecko.com/markets/images/1000/small/xswap.jpeg?1668698596",
  "Curve (Moonbeam)": "https://assets.coingecko.com/markets/images/1051/small/curve.jpeg?1676437461",
  EchoDEX: "https://assets.coingecko.com/markets/images/1252/small/echodex.jpeg?1692781329",
  "ApeSwap (Polygon)": "https://assets.coingecko.com/markets/images/718/small/dCfHngLf_400x400.jpeg?1655093813",
  SwapBased: "https://assets.coingecko.com/markets/images/1242/small/swapbased.jpeg?1692583351",
  "DeFi Swap": "https://assets.coingecko.com/markets/images/637/small/crypto-com-mco-coin-logo.png?1616490722",
  "PancakeSwap (zkSync)": "https://assets.coingecko.com/markets/images/1201/small/PSiAEax7_400x400.jpg?1690885194",
  "Uniswap V3 (Celo)": "https://assets.coingecko.com/markets/images/1099/small/uniswap.jpeg?1679733735",
  Arbswap: "https://assets.coingecko.com/markets/images/1078/small/Arbswap.jpeg?1678162051",
  "Sushiswap (xDai)": "https://assets.coingecko.com/markets/images/678/small/512x512_Logo_no_chop.png?1621847591",
  Claimswap: "https://assets.coingecko.com/markets/images/912/small/9pbkueWn_400x400.jpeg?1656653942",
  "Sushiswap (BSC)": "https://assets.coingecko.com/markets/images/720/small/sushiswap-polygon-matic.png?1634201163",
  "PancakeSwap (Ethereum)": "https://assets.coingecko.com/markets/images/987/small/pancakeswap.jpeg?1666345534",
  "Sushiswap V3 (ThunderCore)": "https://assets.coingecko.com/markets/images/1177/small/sushiswap.png?1688545587",
  "Sushiswap V3 (Linea)": "https://assets.coingecko.com/markets/images/1277/small/sushiswap.png?1695089010",
};
