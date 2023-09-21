import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(17 17 17);
  border-radius: 10px;
  width: 400px;
  display: flex;
  width: 400px;
  box-shadow: 0px 8px 10px black;

  @media screen and (max-width: 993px) {
    /* display: block; */
    width: 100%;
  }
`
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 21px;
  color: white;
  padding-top: 60px;
  @media screen and (max-width: 993px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-height: 200px;
  width: 280px;
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    width: 60%;
  }
`

export const Image = styled.img`
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 30px;
  @media screen and (max-width: 993px) {

    padding: 20px 10px;
  }
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 19px;
  color: #d6d6ba;
`
