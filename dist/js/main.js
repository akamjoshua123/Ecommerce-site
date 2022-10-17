const menu = document.querySelector('.menu');
const bar = document.querySelector('#bar');
bar.addEventListener('click', () => {
    menu.classList.toggle('menu-toggle');
});

const carts = document.querySelectorAll('#cart');
const add = document.querySelector('#add');
const selected = document.querySelector('.selected');

carts.forEach(cart => cart.addEventListener('click', marked));


function marked(e) {
    add.style.display = 'block';
    timer();

    const text = e.target.previousElementSibling.previousElementSibling.innerHTML;

    selected.innerHTML = `${text} has been added to your cart`;
}


function timer() {
    setTimeout(() => {
        add.style.display = 'none';
    }, 2700);
}

const mainImg = document.querySelector('.mainImg');
const imgs = document.querySelectorAll('#img');

imgs.forEach(img => img.addEventListener('click', addImage));

function addImage(e) {
    const att = e.target.src;
    mainImg.setAttribute('src', att);
}

const texts = document.querySelector('#text');
const emails = document.querySelector('#email');
const textAreas = document.querySelector('textarea');
const sendBtn = document.querySelectorAll('.sendBtn');
const simpleModal = document.querySelector('#simple-modal');
const close = document.querySelector('.close');

close.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if(e.target == simpleModal) {
        closeModal();
    }
});

sendBtn.forEach(send => send.addEventListener('click', (e) => {
    e.preventDefault();

    if(textAreas.value === '' || emails.value === '' || texts.value === '') {
        const newDiv = document.createElement('div');
        newDiv.className = 'msg';
        const text = document.createTextNode('Please fill out all fields');
        newDiv.appendChild(text)
        newDiv.innerHTML = `<i class="fa fa-comment"></i> Please fill out this fields`;
        const child = document.querySelector('.form-flex');
        const container = document.querySelector('form');
        container.insertBefore(newDiv, child);
        
        setTimeout(() => newDiv.remove(), 2000);
        
    } else {
        simpleModal.style.display = 'block';
        textAreas.value = '';
        emails.value = '';
        texts.value = '';
    }
}));

function closeModal() {
    simpleModal.style.display = 'none';
}

