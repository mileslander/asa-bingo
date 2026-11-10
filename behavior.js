const gridButtons = document.querySelectorAll('.grid-item')

gridButtons.forEach(gridButton => {
    gridButton.addEventListener('click', () => {
        console.log(gridButton.dataset.id)
        gridButton.classList.toggle('checkmark'); 
    })
});