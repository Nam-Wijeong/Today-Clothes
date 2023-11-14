import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { getClothes } from '../api/firebase';
import Carousel from '../components/Carousel';
import { FaTemperatureHigh } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Clothes() {
  const { state: { temp } } = useLocation();

  const { isLoading, data } = useQuery({
    queryKey: ['data'],
    queryFn: () => getClothes()
  });

  return (
    <>
      {
        isLoading ? 
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
          <Loading />
        </div> : 
        <section className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-4/5 sm:h-section mt-4 py-2 sm:bg-main sm:rounded-2xl sm:shadow-lg overflow-hidden'>
        <Link to='/' className='hidden sm:block absolute top-6 left-6 bg-neutral-100 bg-opacity-70 rounded-full p-2'>
          <AiOutlineHome className='sm:text-3xl'/>
        </Link>
        <div className='flex items-center gap-2 text-sm sm:text-lg font-bold mb-4'>
          <FaTemperatureHigh />
          <p>현재 기온 : {`${Math.floor(temp)}°C`}</p>
        </div>
        {
          temp <= 4 && <>
            <Carousel images={data && data[0].image} />
            <ul className='flex gap-2'>
              {
                data && data[0].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 5 && temp < 9 && <>
            <Carousel images={data && data[1].image} />
            <ul className='flex gap-2'>
              {
                data && data[1].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 9 && temp < 12  && <>
            <Carousel images={data && data[2].image} />
            <ul className='flex gap-2'>
              {
                data && data[2].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 12 && temp < 17 && <>
            <Carousel images={data && data[3].image} />
            <ul className='flex gap-2'>
              {
                data && data[3].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 17 && temp < 20 && <>
            <Carousel images={data && data[4].image} />
            <ul className='flex gap-2'>
              {
                data && data[4].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 20 && temp < 23 && <>
            <Carousel images={data && data[5].image} />
            <ul className='flex gap-2'>
              {
                data && data[5].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 23 && temp < 28 && <>
            <Carousel images={data && data[6].image} />
            <ul className='flex gap-2'>
              {
                data && data[6].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        {
          temp >= 28 && <>
            <Carousel images={data && data[7].image} />
            <ul className='flex gap-2'>
              {
                data && data[7].clothes.map((item, index) => <li key={index} className='bg-neutral-100 font-semibold rounded-xl mt-4 px-1 py-1 text-neutral-600 text-small md:text-base'>
                  {item}
                </li>)
              }
            </ul>
          </>
        }
        </section>
      }
    </>
  )
}
