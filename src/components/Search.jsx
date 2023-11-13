import React, { useState } from 'react'
import { getHourlyWeather, getSearchWeather } from '../api/weather';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BiSearch } from 'react-icons/bi';
import Weather from './Weather';
import Loading from './Loading';
export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState();
  const [weatherList, setWeatherList] = useState();

  // const { isLoading, error, data: weather} = useQuery({
  //   queryKey: ['weather'],
  //   queryFn: async (keyword) => getSearchWeather(keyword)
  // }); 

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
        <div className='flex flex-col items-center my-6'>
          <div className='flex items-center relative'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 left-3 text-neutral-600 font-bold' />
            <input
              className='md:w-96 w-full bg-transparent outline-none border-2 border-zinc-400 text-neutral-600 rounded-full px-8 py-2 mr-2'
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='원하는 지역을 입력해주세요.' />
          </div>
          {result && <Weather result={result} weatherList={weatherList} />}
        </div> 
        }
      </>
  )
}
