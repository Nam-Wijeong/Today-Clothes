import styled from 'styled-components';

const ClothesWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 12px;
  li {
    font-size: 12px;
  }
  li:first-of-type {
  font-size: 16px;
  }
  li:hover {
  color: grey;
}
`

export { ClothesWrap }