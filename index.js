function createGrid() {
  let rows = parseInt(document.querySelector(".rowsInput").value, 10);
  let columns = parseInt(document.querySelector(".columnsInput").value, 10);

  if (
    Number.isInteger(rows) &&
    Number.isInteger(columns) &&
    rows > 0 &&
    columns > 0
  ) {
    // Clear existing grid
    document.getElementById("grid-container").innerHTML = "";

    // Create a new grid with specified rows and columns
    let gridContainer = document.getElementById("grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Fill in the specified cell with a different color
    let targetCellIndex = 1; // Change this to the desired cell index
    let cellCount = rows * columns;

    for (let i = 1; i <= cellCount; i++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      if (i === targetCellIndex) {
        gridItem.classList.add("highlighted");
      }

      gridContainer.appendChild(gridItem);
    }
  } else {
    alert("Please enter valid positive integers for rows and columns.");
  }
}

function resetGrid() {
  document.getElementById("grid-container").innerHTML = "";
}
