import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone'
import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;
  box-shadow: 0px 0.5px 1px gray;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-direction: row;
  padding: 5px;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    display: none;
    width: 100%;
  }
`

export const MenuDevice = styled.div`
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    position: fixed;
    bottom: 6px;
    margin: 0;
    padding: 5px;
    z-index: 1000;
    /* width: 100%; */
  }
`

export const ContainerLeft = styled.div`
  display: flex;

  gap: 30px;
  margin-left: 3%;
`

export const PageLink = styled.button`
  display: flex;

  color: ${(props) => (props.isActive ? '#FA9600' : 'white')};
  background: transparent;
  cursor: pointer;
  text-decoration: none;

  border: none;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  align-items: center;

  font-size: 1.2rem;

  flex-direction: row;

  @media screen and (max-width: 993px) {
    display: flex;
    z-index: 2000;
  }

  img {
    width: 40px;
    padding: 3px;
  }

  &:hover {
    font-weight: bold;
  }

  .notficationCart {
    color: white;
    width: 25px;
    background: red;
    border-radius: 50%;
    font-size: 1rem;
    padding: 2px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    display: flex;
    margin-left: 27px;
    margin-bottom: 30px;

    @media screen and (max-width: 993px) {
      display: unset;
      z-index: 2000;
    }
  }
`

export const PageLinkAdmin = styled.button`
  display: flex;
  color: white;
  display: ${(props) => (props.isAdmin ? 'active' : 'none')};
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  align-items: center;

  font-size: 1.2rem;

  flex-direction: row;
`
export const PageLinkExit = styled.button`
  color: #fa9600;
  cursor: pointer;
  background: transparent;
  font-size: 1.2rem;
  border: none;
  &:hover {
    font-weight: 1000;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  margin-right: 3%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .barra {
    border-right: 0.5px solid gray;
    height: 40px;
    box-shadow: 0px 0px 10px white;
    margin: 5px 30px;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: flex-start;
  p {
    color: white;
    font-size: 1.3rem;
    @media screen and (max-width: 993px) {
      display: none;
    }
  }
`
export const MenuHeader = styled.div`
  display: none;
  width: 98%;
  height: 80px;
  background: black;

  z-index: 2000;
  /* padding: 20px; */
  border-radius: 20px;

  @media screen and (max-width: 993px) {
    display: flex;
    position: fixed;
    bottom: 10px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`
export const Icons = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`

export const ContainerMenu = styled.span`
  display: none;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const FastfoodRoundedIconStyle = styled(FastfoodRoundedIcon)`
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  font-size: 40px !important;
`
export const HomeSharpIconStyle = styled(HomeSharpIcon)`
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  font-size: 40px !important;
`
export const Bag = styled(ShoppingBagTwoToneIcon)`
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  font-size: 40px !important;
`
export const AccountCircleSharpIconStyle = styled(AccountCircleSharpIcon)`
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  font-size: 40px !important;
`
export const ReceiptLongTwoToneIconStyle = styled(ReceiptLongTwoToneIcon)`
  color: ${(props) => (props.isActive ? '#FA9600' : '#898989')} !important;
  font-size: 40px !important;
`
