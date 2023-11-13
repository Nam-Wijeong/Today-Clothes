import { useEffect, useState } from 'react'

export const useGeoLocation = () => {
  const [location, setLocation] = useState({lat: 0, lng: 0});
  const [error, setError] = useState('');

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ lat: latitude, lng: longitude });
  }

  const handleError = (error) => {
    setError(error.message)
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('위치정보를 지원하지 않습니다.');
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return { location, error }
}