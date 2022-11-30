let thumb = document.querySelectorAll('#small');
let img = document.querySelector('#main');

function product(){
    thumb[0].onclick = function(){
        img.src = main[0].src;
    }
    thumb[1].onclick = function(){
        img.src = main[1].src;
    }
    thumb[2].onclick = function(){
        img.src = main[2].src;
    }
    thumb[3].onclick = function(){
        img.src = main[3].src;
    }
}

thumb.forEach(thumbs => thumbs.addEventListener('click',product))