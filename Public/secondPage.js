// // function input() {
// //     var input = document.getElementById('name')
// //     var div = document.getElementById('about');
// //     div.innerHTML = div.innerHTML + input.value;
// // }
// var thing = document.getElementById('input1').value;
// window.onload = function write() {
//     document.getElementById('about').innerHTML = 'hi';

// }
document.getElementById("about").innerHTML = localStorage.getItem('someName');
