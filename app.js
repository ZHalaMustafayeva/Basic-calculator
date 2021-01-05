
let array = [...document.getElementsByClassName('btn')];

array.forEach(function(a,b) {
    a.addEventListener('click',function(){
        document.getElementById('output').innerText += this.innerText;
});
});
document.getElementById('calculate').addEventListener('click', function(){
    document.getElementById('output').innerText = eval(document.getElementById('output').innerText) ;
});
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('output').innerText ="" ;
});
document.getElementById('remove').addEventListener('click', function(){
    document.getElementById('output').innerText =document.getElementById('output').innerText.slice(0, -1);
});