'use strict';
//Burger
const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav');

function openMenu() {
    burger.classList.toggle('burger_active');
    nav.classList.toggle('active');
    document.body.style.overflow = '';
}

nav.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('burger_active');
    document.body.style.overflow = '';
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (nav.classList.contains('active') && burger.classList.contains('burger_active')) {
        document.body.style.overflow = 'hidden';
    }
});



burger.addEventListener('click', openMenu);


//Scroll


function scrollTo(e) {
    window.scroll({
        left: 0,
        top: e.offsetTop,
        behavior: "smooth",
    });
}

const home = document.querySelector('#home'),
      services = document.querySelector('#services'),
      about = document.querySelector('#about'),
      works = document.querySelector('#works'),
      blog = document.querySelector('#blog'),
      clients = document.querySelector('#clients'),
      contacts = document.querySelector('#contacts'),
      back = document.querySelector('.up_btn');

const first = document.querySelector('#first'),
      second = document.querySelector('#second'),
      therd = document.querySelector('#therd'),
      fouth = document.querySelector('#fouth'),
      fife = document.querySelector('#fife'),
      six = document.querySelector('#six'),
      seven = document.querySelector('#seven');


    first.addEventListener('click', () => {
        scrollTo(home);
    });

    second.addEventListener('click', () => {
        scrollTo(services);
    });

    therd.addEventListener('click', () => {
        scrollTo(about);
    });

    fouth.addEventListener('click', () => {
        scrollTo(works);
    });

    fife.addEventListener('click', () => {
        scrollTo(blog);
    });

    six.addEventListener('click', () => {
        scrollTo(clients);
    });

    seven.addEventListener('click', () => {
        scrollTo(contacts);
    });

    back.addEventListener('click', () => {
        scrollTo(home);
    });

//Modal

const modal = document.querySelector('.modal'),
      asideBtn = document.querySelector('.aside_btn'),
      closeBtn = document.querySelector('.modal_close');

      function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    asideBtn.addEventListener('click', openModal);


function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target == closeBtn) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});






