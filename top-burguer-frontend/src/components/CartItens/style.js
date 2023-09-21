import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone'
import styled from 'styled-components'

import { Button } from '../../components/Button'

export const ContainerMaster = styled.div`
  padding: 10px;
  display: block;
  width: 100%;
`
export const Container = styled.div`
  margin-top: 30px;

  margin-bottom: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 865px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  @media screen and (max-width: 548px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  Button {
    color: white;
    margin-top: 5px;
    width: 100%;

    @media screen and (max-width: 993px) {
      width: auto;
    }
  }
`
export const EmpyCart = styled.div`
  display: flex;
  margin: 0;

  color: #1e1e1c;
  font-size: 3rem;
  padding: 20px;
  /* background-color: #3f3f3f; */
  justify-content: center;
  align-items: center;
  text-align: center;
  /* box-shadow: 0px 0px 2px black; */
  border-radius: 15px;
  @media screen and (max-width: 993px) {
    font-size: 2rem;
  }
`
export const ContainerEmpyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  width: 100vw;
`

export const Bag = styled(ShoppingBagTwoToneIcon)`
  color: #1e1e1c;
  font-size: 8rem !important;
  @media screen and (max-width: 993px) {
    font-size: 4rem !important;
  }
`

export const Img = styled.img`
  background: #3f3f3f;
  width: 30%;
  width: 100px;
  height: 100px;

  padding: 2px;

  border-radius: 18px;
`
export const ProductDecription = styled.p`
  /* background: #3f3f3f; */
  /* background: red; */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #d6d6aa;
  p {
    border: 0.1px dashed wheat;
    width: 25px;
    border-radius: 12px;

    padding: 2px;
  }

  @media screen and (max-width: 993px) {
    display: flex;
    justify-content: center;
    padding-right: 20px;
    padding-top: 2px;
  }
`

export const Decription = styled.div`
  /* background: green; */
  width: 70%;
  @media screen and (max-width: 412) {
    width: 70%;
    display: flex;
    /* flex-direction: column; */
    height: 100%;
  }
  @media screen and (max-width: 524) {
    width: 70%;
    flex-direction: row;
    height: 100%;
  }

  /* .decriptAling {
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: end;
    background: violet;
  }
  .quanty {
    align-items: end;
    justify-content: end;
    text-align: end;
    background: yellow;
  } */
`
// export const Decription = styled.div``
// export const Decription = styled.div``

export const Content = styled.div`
  @media screen and (max-width: 993px) {
    padding: 10px;
  }
  display: flex;
  padding: 10px;

  /* display: grid; */
  background: #3f3f3f;
  box-shadow: 0px 0px 8px black;
  margin-bottom: 5px;
  border-radius: 14px;
  font-size: 1rem;

  .quantity-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .img {
    @media screen and (max-width: 993px) {
      width: 30%;
    }
  }

  button {
    padding: 2px;
    border: none;
    cursor: pointer;
    color: #d6d6aa;
    font-size: 18px;
    background: transparent;
  }
  button:hover {
    font-weight: bold;
  }
  button:active {
    opacity: 0.7;
  }
`
export const ButtonStyle = styled(Button)`
  margin-top: 1px;
  background: #79c800e0;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.2rem;
  box-shadow: 0px 0px 2px black;
  width: 100%;

  &:hover {
    background: rgb(163 250 31);
    text-shadow: 0 0 10px black;
    font-size: 1.3rem;
  }
`
export const ButtonStyleTwo = styled(Button)`
  @media screen and (max-width: 993px) {
  }
`
export const ButtonStyleThree = styled(Button)`
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 10px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 2px black;

  @media screen and (max-width: 993px) {
    font-size: 15px;
    display: flex;
    text-align: center;
  }
`
export const ContainerButtom = styled.div`
  gap: 5px;

  @media screen and (max-width: 993px) {
    display: flex;
    justify-content: space-around;
  }
`
export const ContainerContent = styled.div`
  position: relative;
  @media screen and (max-width: 993px) {
  }
`
export const Remove = styled(RemoveCircleTwoToneIcon)`
  cursor: pointer;
  @media screen and (max-width: 993px) {
  }
`
export const Add = styled(AddCircleOutlineTwoToneIcon)`
  cursor: pointer;
  @media screen and (max-width: 993px) {
  }
`
export const TrashAt = styled(HighlightOffTwoToneIcon)`
  color: red !important;
`
export const Trash = styled.button`
  background: transparent;
  position: absolute;
  justify-content: end;
  cursor: pointer;
  align-items: end;
  right: -10px;
  top: -14px;
  @media screen and (max-width: 993px) {
    right: -10px;
    top: -14px;
  }

  width: 14px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: none;
  text-align: end;
  align-items: end;
`
