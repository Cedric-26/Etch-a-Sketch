document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('grid-container');
  const generateButton = document.querySelector("#generateButton");
  const customGenerateButton = document.querySelector("#customGenerateButton");
  const cellCountInput = document.querySelector("#cellCountInput");

  generateButton.addEventListener("click", generateGrid);
  customGenerateButton.addEventListener("click", generateCustomGrid);

  function generateGrid() {
    generateCells(16);
  }

  function generateCustomGrid() {
    const cellCount = parseInt(cellCountInput.value);
    if (cellCount) {
      generateCells(cellCount);
    }
  }

  function generateCells(cellCount) {
    container.innerHTML = '';
    for (let i = 0; i < cellCount; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);

      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = getRandomColor();
      });

      gridSquare.addEventListener('mouseleave', () => {
        gridSquare.style.backgroundColor = '';
      });
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
