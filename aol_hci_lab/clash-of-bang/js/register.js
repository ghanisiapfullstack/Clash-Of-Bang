// Form validation - no regex, no inline styles

document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("registerForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        var isValid = true;

        // name: required, min 3 chars
        var fullName = document.getElementById("fullName").value.trim();
        if (fullName.length === 0) {
            showError("fullNameError", "Full name is required.");
            isValid = false;
        } else if (fullName.length < 3) {
            showError("fullNameError", "Full name must be at least 3 characters.");
            isValid = false;
        }

        // email: required, must have @ with something before and after, and a dot after @
        var email = document.getElementById("email").value.trim();
        if (email.length === 0) {
            showError("emailError", "Email address is required.");
            isValid = false;
        } else {
            var atIndex = email.indexOf("@");
            if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
                showError("emailError", "Please enter a valid email address.");
                isValid = false;
            } else {
                var dotAfterAt = email.indexOf(".", atIndex);
                if (dotAfterAt === -1 || dotAfterAt === email.length - 1) {
                    showError("emailError", "Please enter a valid email address.");
                    isValid = false;
                }
            }
        }

        // age: required, whole number, 13 to 99
        var ageRaw = document.getElementById("age").value.trim();
        if (ageRaw.length === 0) {
            showError("ageError", "Age is required.");
            isValid = false;
        } else {
            var age = Number(ageRaw);
            if (isNaN(age) || age !== Math.floor(age)) {
                showError("ageError", "Please enter a valid whole number for age.");
                isValid = false;
            } else if (age < 13) {
                showError("ageError", "You must be at least 13 years old to register.");
                isValid = false;
            } else if (age > 99) {
                showError("ageError", "Please enter a valid age (13 to 99).");
                isValid = false;
            }
        }

        // favorite troop: must pick one
        var favTroop = document.getElementById("favTroop").value;
        if (favTroop === "") {
            showError("favTroopError", "Please select your favorite troop.");
            isValid = false;
        }

        // reason: required, min 20 chars
        var reason = document.getElementById("reason").value.trim();
        if (reason.length === 0) {
            showError("reasonError", "Please tell us why you want to join.");
            isValid = false;
        } else if (reason.length < 20) {
            showError("reasonError", "Your reason must be at least 20 characters long.");
            isValid = false;
        }

        if (isValid) {
            alert("Welcome to the Clan, " + fullName + "! Your registration was successful.");
            form.reset();
        }
    });

    function showError(elementId, message) {
        var el = document.getElementById(elementId);
        if (el) {
            el.textContent = message;
            el.classList.add("visible");
        }
    }

    function clearErrors() {
        var errors = form.querySelectorAll(".form-error");
        for (var i = 0; i < errors.length; i++) {
            errors[i].textContent = "";
            errors[i].classList.remove("visible");
        }
    }

});
