const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector("input[name='email']").value.trim();
    const passwordInput = form.querySelector("input[name='password']").value.trim();

    if (emailInput === "" || passwordInput === "") {
        alert("All form fields must be filled in");
        return;
    }

    const formData = {
        email: emailInput,
        password: passwordInput
    };

    console.log(formData);
    form.reset();
});