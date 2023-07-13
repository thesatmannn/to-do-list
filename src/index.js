const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const selectedLink = this;

    // Remove 'active' class from all links
    links.forEach(link => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    selectedLink.classList.add("active");

    // Update content based on the selected link
    const content = document.querySelector(".content");
    content.textContent = `You clicked on ${selectedLink.textContent} link.`;
  });
});
