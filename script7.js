
document.addEventListener("DOMContentLoaded", function() {
  const numSnowballs = 200; 
  const body = document.body;
  const padding = 50; 
  
  for (let i = 0; i < numSnowballs; i++) {
    const snowball = document.createElement("div");
    snowball.classList.add("snowball");

   
    const x = Math.random() * (window.innerWidth - 2 * padding) + padding;
    const y = Math.random() * (window.innerHeight + 10); 
    snowball.style.left = `${x}px`;
    snowball.style.top = `${y}px`;

  
    const size = Math.random() * 10 + 5;
    snowball.style.width = `${size}px`;
    snowball.style.height = `${size}px`;

  
    if (Math.random() < 0.8) {
      snowball.classList.add("transparent");
    }

   
    if (Math.random() < 0.3) {
      snowball.classList.add("light");
    }

    
    if (Math.random() < 0.5) {
      snowball.classList.add("small");
    }

    body.appendChild(snowball); 
  }
});
  