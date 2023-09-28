export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a957ef0882msh2ebb2baf05b770ep148706jsnfb400c11d4a5",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "4ce4090bc201bff83a5bf2d9f7c7fc01";

// try {
//   const response = await fetch(`${GEO_API_URL}/cities`, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// export default geoApiOptions
