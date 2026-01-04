class WeatherApp {
    constructor() {
        // Use your actual API key here
        this.apiKey = "b4db485d7c4c485fa6d84351232508";
        this.baseUrl = "https://api.weatherapi.com/v1/current.json";
        
        // DOM Elements
        this.form = document.querySelector("#form");
        this.input = document.querySelector("#input");
        this.weatherContainer = document.querySelector("#weatherContainer");
        this.errorMessage = document.querySelector("#errorMessage");
        this.errorText = document.querySelector("#errorText");
        this.loading = document.querySelector("#loading");
        this.searchItems = document.querySelector("#searchItems");
        this.githubInfo = document.querySelector("#githubInfo");
        
        // Weather display elements
        this.locationEl = document.querySelector("#location");
        this.localTimeEl = document.querySelector("#localTime");
        this.temperatureEl = document.querySelector("#temperature");
        this.feelsLikeEl = document.querySelector("#feelsLike");
        this.weatherIcon = document.querySelector("#weatherIcon");
        this.conditionText = document.querySelector("#conditionText");
        this.humidityEl = document.querySelector("#humidity");
        this.windSpeedEl = document.querySelector("#windSpeed");
        this.pressureEl = document.querySelector("#pressure");
        this.visibilityEl = document.querySelector("#visibility");
        
        // Recent searches array
        this.recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.displayRecentSearches();
        this.fetchGitHubInfo();
        
        // Load default city weather on startup
        this.fetchWeather("Karachi");
    }
    
    setupEventListeners() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const city = this.input.value.trim();
            
            if (city) {
                this.fetchWeather(city);
                this.input.value = "";
            } else {
                this.showError("Please enter a city name");
            }
        });
        
        // Add click event to recent search items
        this.searchItems.addEventListener("click", (e) => {
            if (e.target.classList.contains("search-item") || e.target.parentElement.classList.contains("search-item")) {
                const city = e.target.dataset.city || e.target.parentElement.dataset.city;
                if (city) {
                    this.fetchWeather(city);
                }
            }
        });
        
        // Add keyboard shortcut (Ctrl + K) to focus search
        document.addEventListener("keydown", (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                this.input.focus();
            }
        });
    }
    
    async fetchWeather(city) {
        this.showLoading();
        this.hideError();
        this.hideWeather();
        
        try {
            const response = await fetch(
                `${this.baseUrl}?key=${this.apiKey}&q=${encodeURIComponent(city)}&aqi=no`
            );
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error.message || "City not found");
            }
            
            this.displayWeather(data);
            this.addToRecentSearches(city);
            this.hideLoading();
            
        } catch (error) {
            console.error("Weather fetch error:", error);
            this.showError(error.message || "Failed to fetch weather data. Please try again.");
            this.hideLoading();
        }
    }
    
    displayWeather(data) {
        // Update all weather information
        this.locationEl.textContent = `${data.location.name}, ${data.location.country}`;
        this.localTimeEl.textContent = `Local Time: ${data.location.localtime}`;
        this.temperatureEl.textContent = data.current.temp_c;
        this.feelsLikeEl.textContent = data.current.feelslike_c;
        this.conditionText.textContent = data.current.condition.text;
        this.weatherIcon.src = `https:${data.current.condition.icon}`;
        this.weatherIcon.alt = data.current.condition.text;
        this.humidityEl.textContent = `${data.current.humidity}%`;
        this.windSpeedEl.textContent = `${data.current.wind_kph} km/h`;
        this.pressureEl.textContent = `${data.current.pressure_mb} mb`;
        this.visibilityEl.textContent = `${data.current.vis_km} km`;
        
        // Change background based on temperature
        this.updateBackground(data.current.temp_c);
        
        // Show weather container with animation
        this.showWeather();
    }
    
    updateBackground(temp) {
        let gradient;
        
        if (temp < 0) {
            gradient = "linear-gradient(135deg, #2c3e50, #3498db)";
        } else if (temp < 10) {
            gradient = "linear-gradient(135deg, #2980b9, #6dd5fa)";
        } else if (temp < 20) {
            gradient = "linear-gradient(135deg, #26d0ce, #1a2980)";
        } else if (temp < 30) {
            gradient = "linear-gradient(135deg, #f46b45, #eea849)";
        } else {
            gradient = "linear-gradient(135deg, #ff416c, #ff4b2b)";
        }
        
        document.body.style.background = gradient;
    }
    
    addToRecentSearches(city) {
        // Remove if already exists
        this.recentSearches = this.recentSearches.filter(item => 
            item.toLowerCase() !== city.toLowerCase()
        );
        
        // Add to beginning
        this.recentSearches.unshift(city);
        
        // Keep only last 5 searches
        this.recentSearches = this.recentSearches.slice(0, 5);
        
        // Save to localStorage
        localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches));
        
        // Update display
        this.displayRecentSearches();
    }
    
    displayRecentSearches() {
        if (this.recentSearches.length === 0) {
            this.searchItems.innerHTML = '<p style="color:#666; text-align:center;">No recent searches</p>';
            return;
        }
        
        this.searchItems.innerHTML = this.recentSearches.map(city => `
            <div class="search-item" data-city="${city}">
                <i class="fas fa-map-marker-alt"></i>
                <span>${city}</span>
            </div>
        `).join("");
    }
    
    async fetchGitHubInfo() {
        try {
            const response = await fetch("https://api.github.com/users/rizwanbugti384");
            
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status}`);
            }
            
            const data = await response.json();
            this.displayGitHubInfo(data);
            
        } catch (error) {
            console.error("GitHub fetch error:", error);
            this.githubInfo.innerHTML = `
                <div style="text-align:center; padding:20px;">
                    <i class="fas fa-exclamation-triangle" style="font-size:48px;color:#ff9800;"></i>
                    <p style="color:#666; margin-top:10px;">
                        Unable to load GitHub profile for <strong>rizwanbugti384</strong>
                    </p>
                    <p style="color:#999; font-size:0.9rem;">
                        Error: ${error.message}
                    </p>
                </div>
            `;
        }
    }
    
    displayGitHubInfo(data) {
        // Format the date
        const joinDate = new Date(data.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create website link if available
        const websiteLink = data.blog ? `
            <a href="${data.blog.startsWith('http') ? data.blog : 'https://' + data.blog}" 
               target="_blank" 
               style="color:#26d0ce; text-decoration:none;">
                <i class="fas fa-globe"></i> ${data.blog}
            </a>
        ` : '';
        
        // Create Twitter link if available
        const twitterLink = data.twitter_username ? `
            <a href="https://twitter.com/${data.twitter_username}" 
               target="_blank" 
               style="color:#26d0ce; text-decoration:none;">
                <i class="fab fa-twitter"></i> @${data.twitter_username}
            </a>
        ` : '';
        
        this.githubInfo.innerHTML = `
            <img src="${data.avatar_url}" alt="${data.login}" class="github-avatar" 
                 style="width:100px; height:100px; border-radius:50%; border:3px solid #26d0ce;">
            
            <div class="github-details" style="flex:1;">
                <h3 style="color:#1a2980; margin-bottom:5px; font-size:1.5rem;">
                    ${data.name || data.login}
                    ${data.type === 'Organization' ? '<i class="fas fa-building" style="margin-left:10px;"></i>' : ''}
                </h3>
                
                <p style="color:#666; margin-bottom:15px; font-style:italic;">
                    @${data.login}
                </p>
                
                <p style="color:#333; margin-bottom:15px; line-height:1.5;">
                    ${data.bio || 'No bio available'}
                </p>
                
                <div style="color:#666; font-size:0.9rem; margin-bottom:15px;">
                    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
                        ${data.location ? `
                            <div style="display:flex; align-items:center; gap:5px;">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${data.location}</span>
                            </div>
                        ` : ''}
                        
                        <div style="display:flex; align-items:center; gap:5px;">
                            <i class="far fa-calendar-alt"></i>
                            <span>Joined ${joinDate}</span>
                        </div>
                    </div>
                    
                    ${websiteLink ? `<div style="margin-bottom:5px;">${websiteLink}</div>` : ''}
                    ${twitterLink ? `<div>${twitterLink}</div>` : ''}
                </div>
                
                <div class="github-stats" style="display:flex; gap:15px; flex-wrap:wrap;">
                    <div class="stat" style="background:white; padding:10px 20px; border-radius:10px; 
                          display:flex; align-items:center; gap:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                        <i class="fas fa-users" style="color:#26d0ce;"></i>
                        <div>
                            <div style="font-weight:bold; color:#1a2980; font-size:1.2rem;">
                                ${data.followers.toLocaleString()}
                            </div>
                            <div style="font-size:0.8rem; color:#666;">Followers</div>
                        </div>
                    </div>
                    
                    <div class="stat" style="background:white; padding:10px 20px; border-radius:10px; 
                          display:flex; align-items:center; gap:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                        <i class="fas fa-user-plus" style="color:#26d0ce;"></i>
                        <div>
                            <div style="font-weight:bold; color:#1a2980; font-size:1.2rem;">
                                ${data.following.toLocaleString()}
                            </div>
                            <div style="font-size:0.8rem; color:#666;">Following</div>
                        </div>
                    </div>
                    
                    <div class="stat" style="background:white; padding:10px 20px; border-radius:10px; 
                          display:flex; align-items:center; gap:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                        <i class="fas fa-code-branch" style="color:#26d0ce;"></i>
                        <div>
                            <div style="font-weight:bold; color:#1a2980; font-size:1.2rem;">
                                ${data.public_repos.toLocaleString()}
                            </div>
                            <div style="font-size:0.8rem; color:#666;">Repositories</div>
                        </div>
                    </div>
                    
                    ${data.public_gists > 0 ? `
                        <div class="stat" style="background:white; padding:10px 20px; border-radius:10px; 
                              display:flex; align-items:center; gap:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                            <i class="fas fa-code" style="color:#26d0ce;"></i>
                            <div>
                                <div style="font-weight:bold; color:#1a2980; font-size:1.2rem;">
                                    ${data.public_gists.toLocaleString()}
                                </div>
                                <div style="font-size:0.8rem; color:#666;">Gists</div>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                ${data.html_url ? `
                    <div style="margin-top:20px;">
                        <a href="${data.html_url}" 
                           target="_blank" 
                           style="display:inline-flex; align-items:center; gap:8px;
                                  background:#1a2980; color:white; padding:10px 20px; 
                                  border-radius:10px; text-decoration:none; font-weight:bold;
                                  transition:all 0.3s ease;">
                            <i class="fab fa-github"></i>
                            View GitHub Profile
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    showLoading() {
        this.loading.classList.add("active");
    }
    
    hideLoading() {
        this.loading.classList.remove("active");
    }
    
    showWeather() {
        this.weatherContainer.classList.add("active");
    }
    
    hideWeather() {
        this.weatherContainer.classList.remove("active");
    }
    
    showError(message) {
        this.errorText.textContent = message;
        this.errorMessage.classList.add("active");
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            this.hideError();
        }, 5000);
    }
    
    hideError() {
        this.errorMessage.classList.remove("active");
    }
}

// Initialize the app when page loads
document.addEventListener("DOMContentLoaded", () => {
    new WeatherApp();
    
    // Add some helpful console messages
    console.log("%c🌤️ Weather App Initialized", "color: #26d0ce; font-size: 16px; font-weight: bold;");
    console.log("%cTips:", "color: #1a2980; font-weight: bold;");
    console.log("1. Press Ctrl+K to focus search");
    console.log("2. Click recent searches for quick access");
    console.log("3. Background changes with temperature");
    console.log("%cGitHub Profile:", "color: #1a2980; font-weight: bold;");
    console.log("Now showing: rizwanbugti384");
});