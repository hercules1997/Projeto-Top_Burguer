import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerMenu = styled.div`
  flex-direction: column;
  position: fixed;
  width: 280px;
  color: white;

  min-height: 100vh;
  padding: 70px 45px 70px 15px;
  background-color: #292929;
    box-shadow: 0px 0px 10px #292929;
`
export const ContainerItems = styled.div`
  margin-top: 15px;
  height: 40px;
  margin-bottom: 20px;
`
export const ContainerLogout = styled.button`
  position: fixed;
  bottom: 20px;
  background: transparent;
  border: none;
  font-size: 17px;
  .iconLogout {
    color: #fa9600;
    margin-right: 15px;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  padding: 10px;

  border-radius: 6px;
  align-items: center;
  background-color: ${(props) => (props.isActive ? '#fa9600' : 'none')};
   transition: 1s;
  .icon {
    margin-right: 15px;
  }

  &:hover {
    font-weight: bold;
      transition: 0.8s;
    color: #000;
    background-color: #d6d6ba;
  }
`
