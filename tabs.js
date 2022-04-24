//DYNAMICALLY OPEN TABS ON BTN CLICK

// variables
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// click event on about section clicked
about.addEventListener('click', ((e) => {
    //confirm targeted class
    // console.log(e.target);
    //store id in variable
    const id = e.target.dataset.id;
    btns.forEach((btn) => {
        btn.classList.remove('active');
        //add active on click
        e.target.classList.add('active');
    });
    if (id) {
        // remove active from element
        articles.forEach((article) => {
            article.classList.remove('active');

        });
        //stores id and active to that id when btn is clicked
        const element = document.getElementById(id);
        element.classList.add('active');
    }
}));