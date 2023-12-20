function toggleVisibility(id){
    var element = document.getElementById(id)
    if(element.style.maxHeight){
        element.style.maxHeight=null;
    }else{
        element.style.maxHeight = element.scrollHeight+"px";
    }
}

function toggleActive(id){
    var element = document.getElementById(id)
    element.classList.toggle("Active");
}

function toggleSymbol(id){
    var element = document.getElementById(id)
    if(element.innerHTML === "+"){
        element.innerHTML = "−";
    }else{
        element.innerHTML ="+";
    }
}

document.getElementById("about_button").addEventListener('click', function() {toggleVisibility("about_block")})
document.getElementById("about_button").addEventListener('click', function() {toggleActive("about_button")})
document.getElementById("about_button").addEventListener('click', function() {toggleSymbol("about_symbol")})

document.getElementById("education_button").addEventListener('click', function() {toggleVisibility("education_block")})
document.getElementById("education_button").addEventListener('click', function() {toggleActive("education_button")})
document.getElementById("education_button").addEventListener('click', function() {toggleSymbol("education_symbol")})

document.getElementById("work_button").addEventListener('click', function() {toggleVisibility("work_block")})
document.getElementById("work_button").addEventListener('click', function() {toggleActive("work_button")})
document.getElementById("work_button").addEventListener('click', function() {toggleSymbol("work_symbol")})

document.getElementById("other_button").addEventListener('click', function() {toggleVisibility("other_block")})
document.getElementById("other_button").addEventListener('click', function() {toggleActive("other_button")})
document.getElementById("other_button").addEventListener('click', function() {toggleSymbol("other_symbol")})