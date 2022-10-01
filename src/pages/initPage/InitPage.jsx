import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Splash from '../../components/splash/Splash';
import styled from 'styled-components';

export default function InitPage() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setLoading(false)
    console.log('로딩');
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
              '옷늘의 날씨'에 오신 것을<br/> 환영합니다!
            </InitH1>
            <InitInp type="text" placeholder='이름을 입력해주세요 :)' required onChange={handleData} value={userName}/>
            <InitLink to='/home' onClick={saveData}>시작하기</InitLink>
          </InitForm>
        </>
      }
    </>
  )
}

const InitForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  padding: 200px 30px;
  overflow: hidden;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const InitH1 = styled.h1`
  font-family: 'SCDream4';
  color: var(--color-text);
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 20px;
`
const InitInp = styled.input`
  width: 100%;
  color: var(--color-text);
  border: none;
  border-bottom: 2px solid var(--color-lightpurple);
  outline: none;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  font-family: 'SCDream4';
`
const InitLink = styled(Link)`
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: var(--color-lightpurple);
  color: var(--color-white);
  padding: 14px;
  border-radius: 10px;
  font-family: 'SCDream4';
  font-size: 16px;
  text-align: center;
`
