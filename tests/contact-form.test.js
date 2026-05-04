const assert = require("assert");
const { buildLeadPayload } = require("../assets/js/contact-form");

// Expected in browser: on submit, disable button, post payload, show status.

const payload = buildLeadPayload({
  name: "Ana Perez",
  email: "ana@example.com",
  message: "Hola",
  fromEvent: "index",
});

assert.deepStrictEqual(payload, {
  name: "Ana Perez",
  email: "ana@example.com",
  notes: "Hola",
  phoneNumber: "",
  fromEvent: "index",
});

console.log("contact-form payload builder: OK");
