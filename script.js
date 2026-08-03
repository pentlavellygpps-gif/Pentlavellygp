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
// జనన నమోదు
document.getElementById("birthForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        child_name: document.getElementById("child_name").value,
        dob: document.getElementById("dob").value,
        father_name: document.getElementById("father_name").value,
        mother_name: document.getElementById("mother_name").value,
        mobile: document.getElementById("birth_mobile").value,
        address: document.getElementById("address").value
    };

    emailjs.send(
        "service_v8bnap4",
        "YOUR_BIRTH_TEMPLATE_ID",
        params
    ).then(function () {
        document.getElementById("birthStatus").innerHTML =
            "✅ జనన నమోదు దరఖాస్తు విజయవంతంగా పంపబడింది.";
        document.getElementById("birthForm").reset();
    }).catch(function (error) {
        document.getElementById("birthStatus").innerHTML =
            "❌ దరఖాస్తు పంపడంలో లోపం జరిగింది.";
        console.log(error);
    });
});

// మరణ నమోదు
document.getElementById("deathForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        deceased_name: document.getElementById("deceased_name").value,
        death_date: document.getElementById("death_date").value,
        guardian_name: document.getElementById("guardian_name").value,
        age: document.getElementById("age").value,
        mobile: document.getElementById("death_mobile").value,
        address: document.getElementById("death_address").value,
        reason: document.getElementById("reason").value
    };

    emailjs.send(
        "service_v8bnap4",
        "YOUR_DEATH_TEMPLATE_ID",
        params
    ).then(function () {
        document.getElementById("deathStatus").innerHTML =
            "✅ మరణ నమోదు దరఖాస్తు విజయవంతంగా పంపబడింది.";
        document.getElementById("deathForm").reset();
    }).catch(function (error) {
        document.getElementById("deathStatus").innerHTML =
            "❌ దరఖాస్తు పంపడంలో లోపం జరిగింది.";
        console.log(error);
    });
});        
