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
document.getElementById("complaintForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        ward: document.getElementById("ward").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_v8bnap4",
        "template_cro5pd6",
        params
    )
    .then(function () {
        document.getElementById("status").innerHTML =
            "✅ మీ ఫిర్యాదు విజయవంతంగా పంపబడింది.";

        document.getElementById("complaintForm").reset();
    })
.catch(function (error) {
    console.log("EmailJS Error:", error);

    document.getElementById("status").innerHTML =
        "❌ Error: " + JSON.stringify(error);
});
        
