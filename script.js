const URL_API = "http://localhost:3000/movimientos";

const getMovimientos = async () => {
  try {
    const { data } = await axios.get(URL_API);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos();
  console.log(movimientos);
});
