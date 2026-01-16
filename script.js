async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    alert("Please enter a city");
    return;
  }

  result.innerHTML = "Loading...";

  const response = await fetch(`/weather?city=${city}`);
  const data = await response.json();

  if (data.error) {
    result.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
    return;
  }

  result.innerHTML = `
    <div class="card p-4">
      <h4>${data.city}</h4>
      <p>🌡 Temperature: ${data.temperature} °F</p>
      <p>🤔 Feels Like: ${data.feelsLike} °F</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>🌬 Wind Speed: ${data.windSpeed} mph</p>
      <p>📊 Pressure: ${data.pressure} hPa</p>
      <p>👁 Visibility: ${data.visibility} km</p>
    </div>
  `;
}
