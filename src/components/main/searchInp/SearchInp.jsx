import React from 'react';
import { SearchInput } from './style';

export default function SearchInp({ searchWeather, setLocation, location }) {
  return (
    <>
      <SearchInput
        type='text'
        placeholder='원하는 지역을 입력해주세요!'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchWeather}
      />
    </>
  );
}
