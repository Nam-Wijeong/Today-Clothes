import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { HeaderUl } from './style';

export default function Header() {
  const today = new Date();
  const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <HeaderUl>
      <li>
        {`${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()} ${
          dayArray[today.getDay()]
        }`}
      </li>
      <li>
        <span>{<FontAwesomeIcon icon={faFaceSmile} />}</span>
        <span>{window.localStorage.getItem('userName')}님, 안녕하세요!</span>
      </li>
    </HeaderUl>
  );
}
