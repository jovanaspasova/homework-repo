console.log("working");
const rowInput = document.querySelector("#row-input");
const colInput = document.querySelector("#col-input");
const createBtn = document.querySelector("#create-btn");
const tableEl = document.querySelector("#table-element");
const magicMsg = document.querySelector("msg");

function createTable() {
  tableEl.innerHTML = "";
  for (let i = 0; i < Number(rowInput.value) + 1; i++) {
    const newRow = document.createElement("TR");
    const cell = "<td></td>";
    newRow.innerHTML = cell.repeat(Number(colInput.value) + 1);
    console.log(newRow.cells[0]);
    if (i === 0) {
      for (let g = 0; g <= Number(colInput.value); g++) {
        newRow.cells[g].innerText = `Column ${g}`;
      }
    }
    newRow.cells[0].innerText = `Row ${i}`;
    if (newRow.cells[0].innerText === "Row 0") {
      newRow.cells[0].innerText = `
      Table`;
    }
    tableEl.append(newRow);
  }
}
createBtn.addEventListener("click", () => {
  rowInput.value <= 20 &&
  colInput.value <= 20 &&
  rowInput.value > 0 &&
  colInput.value > 0
    ? createTable()
    : (tableEl.innerHTML =
        "<h2>Please enter a number between 1-20.</h2>");
});