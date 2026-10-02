const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

const backgroundButton = document.getElementById('changeBackground');
const profile = document.getElementById('profile');

const detailsButton = document.getElementById('toggleDetails');
const details = document.getElementById('details');


buttonname.addEventListener("click", function () {
    if (studentname.textContent === "Juan Dela Cruz") {
        studentname.textContent = "Maria Santos";
    } else {
        studentname.textContent = "Juan Dela Cruz";
    }
});


backgroundButton.addEventListener("click", function () {
    if (profile.style.backgroundColor === "rgb(207, 255, 240)" || profile.style.backgroundColor === "#cffff0") {
        profile.style.backgroundColor = "";
    } else {
        profile.style.backgroundColor = "#cffff0";
    }
});


detailsButton.addEventListener("click", function () {
    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
        detailsButton.textContent = "Show Details";
    } else {
        detailsButton.textContent = "Hide Details";
    }
});
