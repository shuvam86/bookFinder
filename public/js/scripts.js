// window.onload= function() {
//     document.getElementById('pg').style.color= 'red';
// }

// function findBook() {
//     document.getElementById('hm').innerHTML= 'Bhelcome';
// }

function findBook() {
    var userSearch= document.getElementById('userInput').value;
    document.getElementById('hm').innerHTML= userSearch;
}