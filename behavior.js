const totalBoxes = 24
let checkedBoxes = document.querySelectorAll('.checkmark').length

const h2 = document.querySelector(`h2`)
h2.textContent = `${checkedBoxes} Tasks Done, ${totalBoxes - checkedBoxes} To Go!`

const gridButtons = document.querySelectorAll('.grid-item')

gridButtons.forEach(gridButton => {
    gridButton.addEventListener('click', () => {

        if (gridButton.classList.contains(`checkmark`) == true) {
            checkedBoxes--
        }

        else {
            checkedBoxes++
        }

        h2.textContent = `${checkedBoxes} Tasks Done, ${totalBoxes - checkedBoxes} To Go!`

        console.log(gridButton.dataset.id)
        gridButton.classList.toggle('checkmark'); 
    })
});