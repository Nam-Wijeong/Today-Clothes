import React, { useEffect, useState } from 'react'
import { useGeoLocation } from '../hooks/useGeoLocation';
import { getCurrentWeather } from '../api/weather';
import Weather from '../components/Weather'
import Search from '../components/Search';

// 사용자 현재 위치에 따른 실시간 날씨 보여주기
export default function Home() {
  // const { location, error } = useGeoLocation();
  // const [curWeather, setCurWeather] = useState({});

  // console.log(location);
  // useEffect(() => {
  //   getCurrentWeather(location.lat, location.lng).then((data) => setCurWeather(data));
  //   console.log(curWeather);
  // }, [location]);

  return (
    <section className='flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-section mt-4 py-2 bg-main rounded-2xl shadow-lg'>
      <Search />
    </section>
  )
}
