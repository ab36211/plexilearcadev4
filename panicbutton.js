
function handleKeyPress(event) {

  if (event.key === "=") {
    
    window.location.href = "https://app.schoology.com/login?destination=home"; 
  }
}


document.addEventListener("keydown", handleKeyPress);
