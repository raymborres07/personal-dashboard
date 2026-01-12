// 1. Clock Logic
function updateTime() {
    const now = new Date();
    // Get hours and minutes
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Update the HTML
    document.getElementById('time').innerText = `${hours}:${minutes}`;
    
    // Dynamic Greeting
    const greetingEl = document.getElementById('greeting');
    const hour = now.getHours();
    
    if (hour < 12) greetingEl.innerText = "Good Morning, Ray.";
    else if (hour < 18) greetingEl.innerText = "Good Afternoon, Ray.";
    else greetingEl.innerText = "Good Evening, Ray.";
}

// Run once immediately, then every second
updateTime();
setInterval(updateTime, 1000);

// 2. Search Bar Logic
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            // Redirect to Google search
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    }
});