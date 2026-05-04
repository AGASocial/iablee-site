function buildLeadPayload({ name, email, message, fromEvent }) {
  return {
    name,
    email,
    notes: message,
    phoneNumber: "",
    fromEvent,
  };
}

if (typeof module !== "undefined") {
  module.exports = { buildLeadPayload };
}
