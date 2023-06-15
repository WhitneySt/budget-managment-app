import getMovimiento from "../services/getMovimiento.js";
import { getDataForm } from "./submitMovimientos.js";

const editMovimiento = ({ editButtons, form, url }) => {
  editButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const idMovement = button.getAttribute("data-id");
      const movement = await getMovimiento(url, idMovement);
      console.log(movement);
      getDataForm(form, movement);
    });
  });
};

export default editMovimiento;
