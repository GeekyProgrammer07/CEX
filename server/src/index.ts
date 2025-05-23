import express from 'express';
import axios from 'axios';
const app = express()

app.get('/getData', async (req, res) => {
    type MarketItem = {
        symbol: string;
        price: string;
        change24h: string;
    };

    const response = await axios.get("https://api.binance.com/api/v3/ticker/24hr");

    const marketData: MarketItem[] = response.data
        .filter((item: any) => item.symbol.endsWith("USDT"))
        .map((item: any): MarketItem => ({
            symbol: item.symbol.replace("USDT", ""),
            price: item.lastPrice,
            change24h: item.priceChangePercent
        }))
    res.json(marketData);
});

app.listen(4000, () => {
    console.log("App listening on port: 4000")
})