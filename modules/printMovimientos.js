const printMovimientos = (movements, container) => {
  container.innerHTML = "";
  movements.forEach((element, index) => {
    container.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.type}</td>
            <td><span class="material-symbols-outlined button--delete" data-id=${element.id}>
close
</span></td>
        </tr>
        `;
  });
};

export default printMovimientos;
