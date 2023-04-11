'use strict';





let li = document.querySelectorAll('li');
let ul = document.querySelectorAll('ul');

li.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('active');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('active');
    })
})

ul.forEach(item => {
    item.addEventListener('dragover', () => {
        let select = document.querySelector('.active');
        item.appendChild(select);
    })
})