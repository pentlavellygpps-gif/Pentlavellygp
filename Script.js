// Pentlavelly Grama Panchayat Website

// Footer లో సంవత్సరం ఆటోమేటిక్‌గా చూపించడానికి
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Website Loaded Message
window.onload = function () {
    console.log("Pentlavelly Grama Panchayat Website Loaded Successfully!");
};

// Photo Gallery Image Click
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            window.open(this.src, "_blank");
        });
    });
});
