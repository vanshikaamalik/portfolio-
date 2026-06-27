// Profile button
document.querySelector('a[href="#about-me"]').addEventListener("click", function(e) {
  e.preventDefault(); // default scroll ko rokta hai
  window.location.href = "profile.html"; // apna profile page ka naam
});

// Skills button
document.querySelector('a[href="#skills"]').addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "skills.html";
});

// Projects button
document.querySelector('a[href="#projects"]').addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "projectp.html";
});

// Achievements button
document.querySelector('a[href="#achievements"]').addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "achievements.html";
});

// Contact button
document.querySelector('a[href="#contact"]').addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "contact.html";
});
