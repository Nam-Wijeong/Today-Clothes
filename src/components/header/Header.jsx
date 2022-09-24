import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const today = new Date();
  const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <HeaderUl>
      <li>
        {`${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()} ${dayArray[today.getDay()]}`}
      </li>
      <li>
        <span>
          {<FontAwesomeIcon icon={faFaceSmile} />}
        </span>
       {window.localStorage.getItem('userName')}님, 안녕하세요!
      </li>
    </HeaderUl>
  )
}

const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 12px;
  span {
    margin-right: 4px;
  }
`