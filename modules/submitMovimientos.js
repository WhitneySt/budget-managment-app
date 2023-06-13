const submitMovimiento = (form) => {
    const dataForm = {};
    const inputForm = Array.from(form.children);
    const dataFormInputs = inputForm.filter(
      (item) => item.localName === "input" || item.localName === "select"
    );
    dataFormInputs.forEach(item => {
        dataForm[item.id] = item.value;
    });
    console.log(dataForm);

}

export default submitMovimiento;