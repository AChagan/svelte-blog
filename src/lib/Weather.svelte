<script lang="ts">
	import weatherbitAPI from './../services/weatherbitAPI.service';

	const weatherService = new weatherbitAPI();

	let temperature;
	let relativeHumidity;
	let windSpeed;
	let windDirection;
	let description;
	let code;
	let imgCode;

	weatherData();
	async function weatherData() {
		const weatherData = await weatherService.getWeatherData();

		temperature = weatherData.data[0].temp;
		relativeHumidity = weatherData.data[0].rh;
		windSpeed = weatherData.data[0].wind_spd;
		windDirection = weatherData.data[0].wind_cdir;

		description = weatherData.data[0].weather.description;
		code = weatherData.data[0].weather.code;

		console.log(weatherData);
		const hours = new Date().getHours();

		console.log(code);

		if (
			code === 200 ||
			code === 201 ||
			code === 202 ||
			code === 230 ||
			code === 231 ||
			code === 232
		) {
			imgCode = 'thunder';
		}

		if (code === 300 || code === 301 || code === 302) {
			imgCode = 'rain';
		}

		if (
			code === 500 ||
			code === 501 ||
			code === 502 ||
			code === 511 ||
			code === 520 ||
			code === 521 ||
			code === 522 ||
			code === 900
		) {
			imgCode = 'heavyRain';
		}

		if (code === 600 || code === 601 || code === 602) {
			imgCode = 'snow';
		}

		if (code === 610 || code === 621 || code === 622 || code === 623) {
			imgCode = 'heavySnow';
		}

		if (
			code === 611 ||
			code === 612 ||
			code === 622 ||
			code === 700 ||
			code === 711 ||
			code === 721 ||
			code === 731 ||
			code === 741 ||
			code === 751 ||
			code === 804
		) {
			imgCode = 'cloud';
		}

		if (code === 800) {
			if (hours > 6 && hours < 20) {
				imgCode = 'day';
			} else {
				imgCode = 'night';
			}
		}

		if (code === 801 || code === 802 || code === 803) {
			if (hours > 6 && hours < 20) {
				imgCode = 'cloudDay';
			} else {
				imgCode = 'cloudNight';
			}
		}
	}
</script>

<div>
	<div class="weather-card">
		<p class="weather-card__info">
			{description}
		</p>

		<p>
			{#if imgCode === 'day'}
				<img class="weather-card__img" src="/day.svg" alt="day" />
			{:else if imgCode === 'night'}
				<img class="weather-card__img" src="/night.svg" alt="night" />
			{:else if imgCode === 'cloudDay'}
				<img class="weather-card__img" src="/cloudy-day.svg" alt="cloudy day" />
			{:else if imgCode === 'cloudNight'}
				<img class="weather-card__img" src="/cloudy-night.svg" alt="cloudy night" />
			{:else if imgCode === 'cloud'}
				<img class="weather-card__img" src="/clouds.svg" alt="clouds" />
			{:else if imgCode === 'heavySnow'}
				<img class="weather-card__img" src="/heavy-snow.svg" alt="heavy snow" />
			{:else if imgCode === 'snow'}
				<img class="weather-card__img" src="/snow.svg" alt="snow" />
			{:else if imgCode === 'heavyRain'}
				<img class="weather-card__img" src="/heavy-rain.svg" alt="heavy rain" />
			{:else if imgCode === 'rain'}
				<img class="weather-card__img" src="/rain.svg" alt="rain" />
			{:else if imgCode === 'thunder'}
				<img class="weather-card__img" src="/thunder.svg" alt="thunders" />
			{/if}
		</p>

		<p class="weather-card__description">
			{temperature} °C
		</p>
		<p class="weather-card__description">
			{relativeHumidity}% humidity
		</p>
		<p class="weather-card__description">
			{windDirection}
			{windSpeed} km/h
		</p>
	</div>
</div>

<style>
	.weather-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: transparent;
		border-radius: 10px;
	}

	.weather-card__img {
		width: 250px;
		height: 250px;
	}

	.weather-card__description {
		font-size: 14px;
		font-weight: bold;
	}

	.weather-card__info {
		font-size: 18px;
		font-weight: bold;
	}
</style>
