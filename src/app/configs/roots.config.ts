import { HomePage } from "../../pages/home/home";
import { Root } from "../models/navigation/Root";
import { RatePage } from "../../pages/rate/rate";

export const APP_ROOTS = [
  new Root('Home', HomePage, true),
  new Root('Rate', RatePage)
];
