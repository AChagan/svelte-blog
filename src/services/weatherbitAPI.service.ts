export default class WeatherbitAPI {
    constructor() { }

    async getWeatherData() {
        const key = <YOUR_KEY>;
        const weather = await fetch(`https://api.weatherbit.io/v2.0/current?lat=51.555973&lon=-0.279672&key=${key}&include=minutely`);
        const weatherdata = await weather.json();
        return { ...weatherdata };
    }
}
