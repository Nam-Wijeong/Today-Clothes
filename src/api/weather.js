// export async function getCurrentWeather(lat, lng) {
//   return await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
//   .then((res) => res.json())
// }

export async function getSearchWeather(keyword) {
  const response = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${keyword}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=kr&units=metric`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  })
  return response;
}

export async function getHourlyWeather(keyword) {
  const response = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/forecast?q=${keyword}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=kr&units=metric&cnt=7`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    } 
    return res.json();
  })
  return response;
}