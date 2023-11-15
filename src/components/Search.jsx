import React, { useState } from 'react'
import { getHourlyWeather, getSearchWeather } from '../api/weather';
import { BiSearch } from 'react-icons/bi';
import Weather from './Weather';
import Loading from './Loading';

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState();
  const [weatherList, setWeatherList] = useState();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      getSearchWeather(keyword)
        .then(data => setResult(data))
        .catch(() => {
          alert('정확한 지역명을 입력해주세요');
          setKeyword('')
        })
        .finally(() => setIsLoading(false))
      getHourlyWeather(keyword)
        .then(data => setWeatherList(data))
        .finally(() => setIsLoading(false))
      }
    }
    return (
      <>
        {isLoading ? <Loading /> : 
        <div className='flex flex-col items-center sm:mt-10'>
          <div className='flex justify-center items-center relative px-1'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 left-3 text-neutral-600 font-bold' />
            <input
              className='md:w-96 w-full bg-neutral-100 sm:bg-transparent outline-none border-2 border-zinc-400 text-neutral-600 rounded-full px-4 pl-6 py-2 text-sm md:text-base'
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='지역을 입력해주세요.' />
          </div>
          {result && <Weather result={result} weatherList={weatherList} />}
        </div> 
        }
      </>
  )
}
