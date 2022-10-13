import { useEffect, useState } from 'react';
import Splash from '../../components/splash/Splash';
import {
  InitForm,
  InitH1,
  InitInp,
  InitLink
} from './style';

export default function InitPage() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setLoading(false)
  }, [])

  const saveData = () => {
    window.localStorage.setItem("userName", userName)
  }

  const handleData = (event) => {
    if(event.target.type === 'text') {
      setUserName(event.target.value);
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      {loading ? <h1>Loading...</h1> :
        <>
          <Splash/>
          <InitForm onSubmit={handleSubmit}>
            <InitH1>
              안녕하세요,<br/>
              <span>'옷늘의 날씨'</span>에 오신 것을<br/> 환영합니다!
            </InitH1>
            <InitInp type="text" placeholder='이름을 입력해주세요 :)' required onChange={handleData} value={userName}/>
            <InitLink to='/home' onClick={saveData}>시작하기</InitLink>
          </InitForm>
        </>
      }
    </>
  )
}

