function input() {
    var input = document.getElementById('name')
    var div = document.getElementById('about');
    div.innerHTML = div.innerHTML + input.value;
}