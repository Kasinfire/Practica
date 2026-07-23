const { z } = window.Zod;

const registerSchema = z.object({
    name : z.string().min(1),
    email : z.string().email(),
    password : z.string.min(6),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    };

    try {
    registerSchema.prase(formData);
    alert("¡Registro exitoso!");
    } catch (error) {
    document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
    }
});
