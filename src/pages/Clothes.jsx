import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { getClothes } from '../api/firebase';
import Carousel from '../components/Carousel';
import { FaTemperatureHigh } from 'react-icons/fa';

export default function Clothes() {
  const { state: { temp } } = useLocation();
  console.log(temp);

  const queryClient = useQueryClient();
  const { isLoading, error, data: data } = useQuery({
    queryKey: ['data'],
    queryFn: () => getClothes()
  });

  console.log(data);
  return (
    <section className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-section mt-4 py-2 bg-main rounded-2xl shadow-lg text-neutral-600'>
      <div className='flex items-center gap-2 text-lg font-bold mb-4'>
        <FaTemperatureHigh />
        <p>현재 기온 : {`${Math.floor(temp)}°C`}</p>
      </div>
      {
        temp <= 4 && <>
          <Carousel images={data && data[0].image} />
          <ul className='flex gap-4'>
            {
              data && data[0].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 5 && temp < 9 && <>
          <Carousel images={data && data[1].image} />
          <ul className='flex gap-4'>
            {
              data && data[1].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 9 && temp < 12  && <>
          <Carousel images={data && data[2].image} />
          <ul className='flex gap-4'>
            {
              data && data[2].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 12 && temp < 17 && <>
          <Carousel images={data && data[3].image} />
          <ul className='flex gap-4'>
            {
              data && data[3].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 17 && temp < 20 && <>
          <Carousel images={data && data[4].image} />
          <ul className='flex gap-4'>
            {
              data && data[4].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 20 && temp < 23 && <>
          <Carousel images={data && data[5].image} />
          <ul className='flex gap-4'>
            {
              data && data[5].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 23 && temp < 28 && <>
          <Carousel images={data && data[6].image} />
          <ul className='flex gap-4'>
            {
              data && data[6].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
      {
        temp >= 28 && <>
          <Carousel images={data && data[7].image} />
          <ul className='flex gap-4'>
            {
              data && data[7].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-2 py-1 text-neutral-600'>
                {item}
              </li>)
            }
          </ul>
        </>
      }
    </section>
  )
}
