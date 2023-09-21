import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2f2f2f;
  background: black;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 100px;

  .rec.rec-dot {
    background: transparent;
    border: 1px solid gray;
  }
  .rec.rec-dot:hover {
    background: black;
    border: 1px solid #d6d6ba;
    box-shadow: 0px 0px 12px white;
  }
  .rec.rec-dot_active {
    background: white;
    box-shadow: 0px 0px 12px white;
  }

  .rec.rec-arrow {
    background-color: transparent;
    margin-left: 30px;
    margin-right: 30px;
    height: 100%;
    border-radius: 0;
    color: #3f3f3f;
    @media screen and (max-width: 993px) {
      margin: 0;
    }
  }

  .rec.rec-arrow:hover {
    background-color: #3f3f3f;
    color: white;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-arrow:active {
    opacity: 0.1;
  }
  .rec.rec-arrow-right {
    border-right: solid 0.5px #3f3f3f;
  }
  .rec.rec-arrow-left {
    border-left: solid 1px #3f3f3f;
  }

  h1 {
    font-size: 3rem;
    color: #d6d6ba;
    @media screen and (max-width: 993px) {
      font-size: 1.5rem;
    }
  }
`

export const ContainerItens = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px black;
  @media screen and (max-width: 993px) {
    margin-top: 0;
  }
`

export const ImgCategory = styled.img`
  width: 280px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 8px 12px black;

  cursor: pointer;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`

export const Button = styled(Link)`
  background-color: #3f3f3f;
  /* margin-left: 50px; */

  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  font-weight: bold;
  border: none;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 8px 10px black;
  font-size: 1.2rem;
  border-radius: 8px;
  color: #d6d6ba;

  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #d6d6ba;
    transition: 0.8s;
  }

  &:active {
    opacity: 0.7;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    font-size: 1.2rem;
  }
`
