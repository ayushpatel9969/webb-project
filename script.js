// Function to show a greeting based on the time
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";

    greetingElement.innerText = message;
}

// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
}

// Run greeting on load
updateGreeting();
// Function to fetch data from a public API
async function fetchQuote() {
    const textElement = document.getElementById('quote-text');
    textElement.innerText = "Fetching from server...";

    try {
        // We are calling a real external API here
        const response = await fetch('https://api.quotable.io/random?tags=technology');
        const data = await response.json();
        
        // Updating the web page with real-time data
        textElement.innerHTML = `"${data.content}" <br><strong>— ${data.author}</strong>`;
    } catch (error) {
        textElement.innerText = "System busy. Try again later.";
        console.error("Error fetching data:", error);
    }
}

// Call it once when the page loads
fetchQuote();