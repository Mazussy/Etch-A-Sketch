
const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
    container.innerHTML = ''; 

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });

        container.appendChild(gridItem);
    }

    const gridItemSize = 500 / size; 
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.flex = `1 0 ${gridItemSize}px`;
        item.style.height = `${gridItemSize}px`;
    });
}

resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter new grid size (between 1 and 100):"));
    
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createGrid(16);
