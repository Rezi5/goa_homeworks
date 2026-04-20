import { cart } from "./hm5.js";
export function getTotal() {
return cart.reduce((a, b) => a + b, 0);
}
