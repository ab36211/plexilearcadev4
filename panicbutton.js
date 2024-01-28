// Function to handle key press events
function handleKeyPress(event) {
  // Check if the pressed key is "~"
  if (event.key === "=") {
    // Redirect to the specified website
    window.location.href = "https://app.schoology.com/login?destination=home"; 
  }
}

// Add event listener for key press events
document.addEventListener("keydown", handleKeyPress);
