let form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.target;

    if (email.value === "" || password.value === "") {
        alert("Por favor llene todos los campos");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.target.reset();
});

