
// REUSABLE PASSWORD VISIBILITY
function setupPasswordToggle(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);

    if (!input || !button) return;

    button.addEventListener("click", function () {
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        button.textContent = isHidden ? "Hide" : "Show";
    });
}

setupPasswordToggle("password", "togglePassword");
setupPasswordToggle("registerPassword", "toggleRegisterPassword");
setupPasswordToggle("confirmPassword", "toggleConfirmPassword");


// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (!email || !password) {
            message.textContent = "Please complete all required fields.";
            return;
        }

        message.textContent =
            "Login interface working! Real authentication is coming later.";
    });
}


// REGISTRATION FORM
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const agreeTerms = document.getElementById("agreeTerms").checked;
        const message = document.getElementById("registerMessage");

        if (!fullName || !phone || !email || !password || !confirmPassword) {
            message.textContent = "Please complete all required fields.";
            return;
        }

        if (password.length < 8) {
            message.textContent = "Password must contain at least 8 characters.";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "Your passwords do not match.";
            return;
        }

        if (!agreeTerms) {
            message.textContent = "Please agree to the terms and conditions.";
            return;
        }

        // Save demo profile information (never save the password)
        const member = {
            fullName: fullName,
            phone: phone,
            email: email
        };

        localStorage.setItem("digitalEkubMember", JSON.stringify(member));

        // Open the member dashboard
        window.location.href = "dashboard.html";
    });
}


// MEMBER DASHBOARD
const memberName = document.getElementById("memberName");

if (memberName) {
    const savedMember = localStorage.getItem("digitalEkubMember");

    if (!savedMember) {
        window.location.href = "register.html";
    } else {
        const member = JSON.parse(savedMember);

        memberName.textContent = member.fullName;
        document.getElementById("memberEmail").textContent = member.email;
        document.getElementById("memberPhone").textContent = member.phone;
        document.getElementById("memberInitial").textContent =
            member.fullName.charAt(0).toUpperCase();
    }
}


// LOGOUT
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("digitalEkubMember");
        window.location.href = "../index.html";
    });
}
