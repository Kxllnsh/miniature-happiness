console.clear();

const body = document.querySelector('html');

function light(){
    body.classList.toggle('light-mode');

    let x = document.querySelectorAll('.light');
    let i;

    for (i = 0; i < x.length; i++){
        x[i].classList.toggle('light-card-bg');
    }
}