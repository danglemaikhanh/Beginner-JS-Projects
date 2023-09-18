const para = document.querySelector('div.error');
console.log(para);
// Nodelist
const paras = document.querySelectorAll('p');
console.log(paras[0]);
paras.forEach(para => {
    console.log(para);
});
const errors = document.querySelectorAll('.error');
console.log(errors);
// get an element by ID
const title = document.getElementById('title');
console.log(title);
// get element by their class name
//Collection
const error = document.getElementsByClassName('error');
console.log(error);
// get element by their tag name
const newParas = document.getElementsByTagName('p');
console.log(newParas);
console.log(newParas[1]);

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.deepl.com/translator');
link.innerText = 'DeepL';

const msg = document.querySelector('.error');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');

//title.setAttribute('style', 'margin: 20px');
console.log(title.style);
console.log(title.style.color);
// adding
title.style.margin = '20px';
title.style.color = 'crimson';
title.style.fontSize = '50px';
// deleting
title.style.margin = '';

const content = document.querySelector('.content');
content.innerHTML += '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi','yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});
