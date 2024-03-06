import { coffeStock as stock, isCoffeMachineReady } from "./state.js";

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(stock);
console.log(isCoffeMachineReady);