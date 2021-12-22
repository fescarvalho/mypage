var percent = document.querySelector('.percent');
var loading = document.querySelector('.loading');
var count = 4;
var load = setInterval(animate, 90);

function animate(){
    if (count == 100){
        loading.parentElement.removeChild(loading)
        clearInterval(load);
    }

    else{
        count = count + 4;
        percent.textContent = count + "%";
    }
}


