document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const documentList = document.getElementById("documentList");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    const items = documentList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent || items[i].innerText;
      if (itemText.toLowerCase().includes(filter)) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  });
});
