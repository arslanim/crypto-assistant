import { Deserializable } from "./deserializable";

export class Rate implements Deserializable<Rate> {
  name: string;
  avg: any;
  buy_price: any;
  high: any;
  last_trade: any;
  low: any;
  sell_price: any;
  updated: any;
  vol: any;
  vol_curr: any;

  deserialize(input: any): Rate {
    Object.assign(this, input);

    return this;
  }
}
