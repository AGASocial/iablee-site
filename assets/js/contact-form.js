function buildLeadPayload({ name, email, message, fromEvent }) {
  return {
    name,
    email,
    notes: message,
    phoneNumber: "",
    fromEvent,
  };
}

async function submitContactForm(form) {
  const submitButton = form.querySelector("button[type='submit']");
  const status = form.querySelector("[data-form-status]");
  const formData = new FormData(form);

  const payload = buildLeadPayload({
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    message: formData.get("message") || "",
    fromEvent: form.dataset.fromEvent || "",
  });

  submitButton.disabled = true;
  submitButton.classList.add("opacity-60", "cursor-not-allowed");

  try {
    const response = await fetch("https://n8n.aga.social/webhook/iablee-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Webhook error");
    }

    status.textContent = "Mensaje recibido.";
    status.classList.remove("hidden");
  } catch (error) {
    status.textContent = "No se pudo enviar. Intenta de nuevo.";
    status.classList.remove("hidden");
    submitButton.disabled = false;
    submitButton.classList.remove("opacity-60", "cursor-not-allowed");
  }
}

function wireContactForms() {
  const forms = document.querySelectorAll("[data-contact-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitContactForm(form);
    });
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", wireContactForms);
}

if (typeof module !== "undefined") {
  module.exports = { buildLeadPayload };
}
