// 1. CLOCK & GREETING
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}`;
    
    const greetingEl = document.getElementById('greeting');
    const hour = now.getHours();
    
    if (hour < 12) greetingEl.innerText = "Good Morning, Ray.";
    else if (hour < 18) greetingEl.innerText = "Good Afternoon, Ray.";
    else greetingEl.innerText = "Good Evening, Ray.";
}
setInterval(updateTime, 1000);
updateTime();

// 2. SEARCH BAR
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) window.location.href = `https://www.google.com/search?q=${query}`;
    }
});

// 3. BACKGROUND IMAGE (New!)
function setBackground() {
    // Generate a random number to trick the browser into NOT caching the image
    const randomNum = Math.floor(Math.random() * 1000);
    // Fetch a 1920x1080 nature image
    const imageUrl = `https://picsum.photos/1920/1080?random=${randomNum}`;
    
    // Create a new image object to preload it (prevents flickering)
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    };
}
setBackground();

// 4. WEATHER API (New!)
async function fetchWeather() {
    const weatherEl = document.getElementById('weather');
    
    // Coordinates for Nagoya University area
    const lat = 35.15; 
    const lon = 136.96;
    
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        
        const temp = data.current_weather.temperature;
        // Check if it's day or night (1 = day, 0 = night in some APIs, simplistic here)
        const isDay = data.current_weather.is_day;
        
        weatherEl.innerText = `Nagoya: ${temp}°C`;
    } catch (error) {
        weatherEl.innerText = "Weather unavailable";
        console.error("Weather error:", error);
    }
}
fetchWeather();

// --- 5. TODO LIST LOGIC ---

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Load todos from Local Storage on startup
let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

// Add Task Event
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && todoInput.value.trim() !== "") {
        addTodo(todoInput.value);
        todoInput.value = ""; // Clear input
    }
});

function addTodo(text) {
    const todo = {
        text: text,
        completed: false
    };
    todos.push(todo);
    saveAndRender();
}

// Render the list to the HTML
function renderTodos() {
    todoList.innerHTML = ""; // Clear current list
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerText = todo.text;
        
        // Add class if completed
        if (todo.completed) {
            li.classList.add('completed');
        }

        // Left Click: Toggle Complete
        li.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveAndRender();
        });

        // Right Click: Delete Task
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Stop the normal right-click menu
            todos.splice(index, 1); // Remove item from array
            saveAndRender();
        });

        todoList.appendChild(li);
    });
}

// Save to Local Storage
function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}