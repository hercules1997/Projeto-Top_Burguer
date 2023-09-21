import styled from 'styled-components'

import ImgLogoCart from '../../assets/imgLogoCart.png'

export const Container = styled.div`
  background-image: url('${ImgLogoCart}');
  background: #2f2f2f;
  background: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #ffff;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`

export const HomeImage = styled.img`
  box-shadow: 0px 12px 35px black;
`
export const ContainerItems = styled.div`
  display: flex;
  padding: 15px;

  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  padding: 40px;
  @media screen and (max-width: 993px) {
    display: flex;
    width: 100vw;
    padding: 20px;
    margin-bottom: 50px;
  }
`
export const NotificationStatus = styled.div`
  background: rgb(18 18 18);
  display: flex;
  border-radius: 12px;
  box-shadow: 0 0 1.2px white;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
export const MessageStatus = styled.div`
  display: flex;

  width: 80%;
  padding: 20px;
  justify-content: flex-start;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
export const CancelOrder = styled.div`
  width: 20%;
  padding: 20px;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    color: red;
  }

  @media screen and (max-width: 993px) {
  }
`
export const ResumeOrders = styled.div`
  background: rgb(18 18 18);
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 0 1.2px white;
  border-radius: 12px;
h2 {
  color: orange;
}

  ul {
    padding-left: 20px;
    margin-top: 20px;
    list-style: none;
  }

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
