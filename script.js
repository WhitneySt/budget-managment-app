import getMovimientos from "./services/getMovimientos.js";
import printMovimientos from "./modules/printMovimientos.js";
import { URL_API } from "./services/data.js";

const tbody = document.getElementById("tablebody");

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos(URL_API);
 printMovimientos(movimientos, tbody);
});
