export interface CurrencyDto {
  id: string;
  name: string;
  symbol: string;
  image: string;
  total_volume: number;
  market_cap: number;
  current_price: number;
  price_change_percentage_24h: number;
}
