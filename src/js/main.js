var hamburger = document.querySelector('.hamburger');

var navigationBar = document.querySelector('.navigationBar');



hamburger.addEventListener("click", function(event){

    if(navigationBar.style.display == 'none'){
        navigationBar.style.display = 'block';
    }else{
        navigationBar.style.display = 'none';
    }

});
