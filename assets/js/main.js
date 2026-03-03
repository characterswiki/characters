document.addEventListener("DOMContentLoaded", function() {

  const searchInput = document.getElementById("sidebarSearch");
  const recentList = document.getElementById("recentList");

  if (searchInput && recentList) {
    searchInput.addEventListener("keyup", function() {
      const filter = searchInput.value.toLowerCase();
      const items = recentList.getElementsByTagName("li");

      for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
      }
    });
  }

});

function toggleSection(element) {
  const ul = element.nextElementSibling;
  ul.style.display = ul.style.display === "none" ? "block" : "none";
}
