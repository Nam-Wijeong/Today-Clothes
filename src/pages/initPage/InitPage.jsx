import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Splash from '../../components/splash/Splash';
import styled from 'styled-components';

const InitForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 375px;
  margin: 200px auto;
  padding: 0 30px;
`
const InitH1 = styled.h1`
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 20px;
`
const InitInp = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  margin-bottom: 20px;
  padding: 10px;
`
const InitLink = styled(Link)`
  width: 100%;
  cursor: pointer;
  background-color: lightgrey;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
`

export default function InitPage() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setLoading(false)
    console.log('로딩');
  }, [])

  const handleData = (event) => {
    if(event.target.type === 'text') {
      setUserName(event.target.value);
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem('username', userName);
    console.log(userName);
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
            <InitLink to='/home'>시작하기</InitLink>
          </InitForm>
        </>
      }
    </>
  )
}
