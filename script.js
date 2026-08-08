// ==========================================
// PENTLAVELLY GRAMA PANCHAYAT
// script.js
// ==========================================


// ------------------------------------------
// 1. FOOTER YEAR
// ------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


// ------------------------------------------
// 2. COMPLAINT FORM
// ------------------------------------------

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {

    complaintForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const status = document.getElementById("status");

        const templateParams = {

            name: document.getElementById("name").value,

            mobile: document.getElementById("mobile").value,

            ward: document.getElementById("ward").value,

            subject: document.getElementById("subject").value,

            message: document.getElementById("message").value

        };


        status.textContent =
            "ఫిర్యాదు పంపబడుతోంది...";


        emailjs.send(

            "service_v8bnap4",

            "template_2xnub3q",

            templateParams

        )

        .then(function () {

            status.textContent =
                "✅ మీ ఫిర్యాదు విజయవంతంగా పంపబడింది.";

            complaintForm.reset();

        })

        .catch(function (error) {

            console.error("Complaint Error:", error);

            status.textContent =
                "❌ ఫిర్యాదు పంపడంలో సమస్య వచ్చింది. దయచేసి మళ్లీ ప్రయత్నించండి.";

        });

    });

}


// ------------------------------------------
// 3. BIRTH REGISTRATION FORM
// ------------------------------------------

const birthForm = document.getElementById("birthForm");

if (birthForm) {

    birthForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const status =
            document.getElementById("birthStatus");


        const templateParams = {

            child_name:
                document.getElementById("child_name").value,

            dob:
                document.getElementById("dob").value,

            father_name:
                document.getElementById("father_name").value,

            mother_name:
                document.getElementById("mother_name").value,

            birth_mobile:
                document.getElementById("birth_mobile").value,

            address:
                document.getElementById("address").value

        };


        status.textContent =
            "జనన నమోదు దరఖాస్తు పంపబడుతోంది...";


        emailjs.send(

            "service_v8bnap4",

            "template_cro5pd6",

            templateParams

        )

        .then(function () {

            status.textContent =
                "✅ జనన నమోదు దరఖాస్తు విజయవంతంగా పంపబడింది.";

            birthForm.reset();

        })

        .catch(function (error) {

            console.error("Birth Registration Error:", error);

            status.textContent =
                "❌ జనన నమోదు దరఖాస్తు పంపడంలో సమస్య వచ్చింది.";

        });

    });

}


// ------------------------------------------
// 4. DEATH REGISTRATION FORM
// ------------------------------------------

const deathForm = document.getElementById("deathForm");

if (deathForm) {

    deathForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const status =
            document.getElementById("deathStatus");


        const templateParams = {

            deceased_name:
                document.getElementById("deceased_name").value,

            death_date:
                document.getElementById("death_date").value,

            guardian_name:
                document.getElementById("guardian_name").value,

            age:
                document.getElementById("age").value,

            death_mobile:
                document.getElementById("death_mobile").value,

            death_address:
                document.getElementById("death_address").value,

            reason:
                document.getElementById("reason").value

        };


        status.textContent =
            "మరణ నమోదు దరఖాస్తు పంపబడుతోంది...";


        /*
        ==========================================
        IMPORTANT
        ==========================================

        ఇక్కడ Death Registration Template ID
        ఇంకా పెట్టలేదు.

        EmailJSలో Death Template create చేసిన
        తర్వాత:

        "YOUR_DEATH_TEMPLATE_ID"

        స్థానంలో ఆ Template ID పెట్టాలి.
        ==========================================
        */


        emailjs.send(

            "service_v8bnap4",

            "YOUR_DEATH_TEMPLATE_ID",

            templateParams

        )

        .then(function () {

            status.textContent =
                "✅ మరణ నమోదు దరఖాస్తు విజయవంతంగా పంపబడింది.";

            deathForm.reset();

        })

        .catch(function (error) {

            console.error("Death Registration Error:", error);

            status.textContent =
                "❌ మరణ నమోదు దరఖాస్తు పంపడంలో సమస్య వచ్చింది.";

        });

    });

}


// ------------------------------------------
// 5. GALLERY IMAGE CLICK
// ------------------------------------------

const galleryImages =
    document.querySelectorAll(".gallery img");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        window.open(this.src, "_blank");

    });

});
