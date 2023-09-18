/* const para = document.querySelector('p');
para.innerText = 'Hello';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += ' Yo';
});
 */
// change classes
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    } else if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});

const title = document.querySelector('#title');
title.classList.toggle('test');