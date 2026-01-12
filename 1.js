function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Lūdzu aizpildi visus laukus!";
        return;
    }

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Veiksmīga pieslēgšanās!";
    
    } else {
        message.style.color = "red";
        message.textContent = "Nepareizs lietotājvārds vai parole";
    }
}
