"use strict"


const buttons = document.querySelectorAll('button');
const flexContainer = document.getElementById('flex-container');

buttons.forEach((button, index) => {
    console.log(button.target)
    button.addEventListener('click', (event) => {
        const dataAttr = event.target.getAttribute("data-direction");

        buttons.forEach((el, i) => {
            if (i !== index) {
                el.style.backgroundColor = 'white';
                el.style.color = 'initial';
            }
        })

        button.style.backgroundColor = 'cornflowerblue';
        button.style.color = 'white';
        flexContainer.style.flexDirection = dataAttr;
    })
});

