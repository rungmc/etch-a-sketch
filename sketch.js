const grid = document.querySelector('#grid');

function populateGrid(count = 16){
    grid.style.gridTemplateRows = `repeat(${count}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${count}, 1fr)`;

    for(let x=1; x<=count; x++){
        for(let y=1; y<=count; y++){
            const gridItem = document.createElement('div');

            gridItem.classList.add('grid-item');
            gridItem.style.gridArea = (`${x} / ${y} / ${x+1} / ${y+1}`);

            gridItem.addEventListener('mouseover', () => {
                if(gridItem.classList.contains('grid-hovered'))
                    gridItem.classList.remove('grid-hovered');
                else gridItem.classList.add('grid-hovered');
            });

            grid.appendChild(gridItem);
        }
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    grid.innerHTML = '';
    const square = prompt('How big would you like your new square to be?');

    if (square > 100 || square < 1) alert('Invalid choice! Must be between 1 and 100.');
    else populateGrid(square);
});

populateGrid();