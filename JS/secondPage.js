document.getElementById("name").innerHTML = sessionStorage.getItem('me');
document.getElementById("about").innerHTML = sessionStorage.getItem('about-me');
document.getElementById("education").innerHTML = sessionStorage.getItem('education');
document.getElementById("Languages").innerHTML = sessionStorage.getItem('language');
document.getElementById("experience").innerHTML = sessionStorage.getItem('experienceJob');
document.getElementById("contact").innerHTML = sessionStorage.getItem('contact');





$("#profileImage").click(function (e) {
    $("#imageUpload").click();
});

function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
        $('#profileImage').attr('src',
            window.URL.createObjectURL(uploader.files[0]));
    }
}

$("#imageUpload").change(function () {
    fasterPreview(this);
});

