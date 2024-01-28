document.addEventListener("DOMContentLoaded", function() {
  const numSnowballs = 300; // Reduce the number of snowballs
  const body = document.body;
  const padding = 50; // Adjust this value as needed to control the spread around the edges

  for (let i = 0; i < numSnowballs; i++) {
    const snowball = document.createElement("div");
    snowball.classList.add("snowball");

    // Randomize position within the visible viewport with padding to avoid edges
    const x = Math.random() * (window.innerWidth - 2 * padding) + padding;
    const y = Math.random() * (window.innerHeight + 590); // Add extra to ensure visibility at the bottom
    snowball.style.left = `${x}px`;
    snowball.style.top = `${y}px`;

    // Randomize size and opacity
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    snowball.style.width = `${size}px`;
    snowball.style.height = `${size}px`;

    // Apply transparent class to most snowballs
    if (Math.random() < 0.8) {
      snowball.classList.add("transparent");
    }

    // Add lighter class to some snowballs
    if (Math.random() < 0.3) {
      snowball.classList.add("light");
    }

    // Add smaller class to some snowballs
    if (Math.random() < 0.5) {
      snowball.classList.add("small");
    }

    body.appendChild(snowball); // Append snowball to body
  }
});
