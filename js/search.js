// Search function available on all pages
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  if (!form || !input) return; // do nothing

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    if (query) {
      // Redirect to collection page with search query
      window.location.href = `collection.html?search=${encodeURIComponent(query)}`;
    }
  });
});
