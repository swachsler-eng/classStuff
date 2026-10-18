(function () {
    'use strict';

    const API_KEY = '19e3bfcd5b2fbfd2053144a20f7d04fc';

    const form = document.getElementById('searchForm');
    const cityInput = document.getElementById('cityInput');
    const message = document.getElementById('message');
    const weatherSection = document.getElementById('weather');

    const vibes = {
        clear: 'Sunglasses on. Main character energy. 😎',
        clouds: 'Cozy hoodie weather. ☁️',
        rain: 'Stay in, grab a snack, put on a movie. 🌧️',
        drizzle: 'Light rain. Your hair might not survive. 🌦️',
        thunderstorm: 'Dramatic sky. Stay inside. ⛈️',
        snow: 'Hot chocolate time. ❄️',
        mist: 'Spooky foggy vibes. 🌫️'
    };

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const city = cityInput.value.trim();
        if (!city) {
            return;
        }

        message.textContent = 'Loading...';
        weatherSection.classList.add('hidden');

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=imperial`;
            const r = await fetch(url);

            if (!r.ok) {
                throw new Error(r.status === 404 ? `Couldn't find "${city}"` : `Error: ${r.status} ${r.statusText}`);
            }

            const data = await r.json();
            console.log(data);
            showWeather(data);
            message.textContent = '';
        } catch (e) {
            console.error(e);
            message.textContent = e.message;
        }
    });

    function showWeather(data) {
        const weather = data.weather[0];
        let type = weather.main.toLowerCase();
        if (['haze', 'fog', 'smoke', 'dust', 'sand', 'ash', 'squall', 'tornado'].includes(type)) {
            type = 'mist';
        }

        document.getElementById('city').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°F`;
        document.getElementById('description').textContent = weather.description;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
        document.getElementById('icon').alt = weather.description;
        document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°F`;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind').textContent = `${Math.round(data.wind.speed)} mph`;
        document.getElementById('vibe').textContent = vibes[type] || 'Vibes unknown. Good luck out there. 🤷';

        document.body.className = type === 'drizzle' ? 'rain' : type;
        weatherSection.classList.remove('hidden');
    }
}());
