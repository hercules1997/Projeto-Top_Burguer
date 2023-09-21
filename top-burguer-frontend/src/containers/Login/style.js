import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
  }
`
export const Background = styled.span`
  display: flex;
  background-color: #140d07;

  width: 60%;
  justify-content: center;

  img {
    width: 60%;
  }

  @media screen and (max-width: 993px) {
    display: none;
  }
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #444444;
  background: black;

  width: 40%;
  justify-content: center;
  text-align: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    padding: 10px;
    color: white;
  }

  h1 {
    margin: 0;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
  }
`
export const Logo = styled.img`
  width: 150px;

  @media screen and (max-width: 993px) {
    display: flex;
    width: 300px;
  }
`

export const Label = styled.p`
  text-align: start;
  margin: 6px 0 6px 6px;
  font-weight: 700;
`
export const Input = styled.input`
  background-color: rgb(91 91 91);

  width: 350px;
  height: 35px;
  align-items: center;
  padding: 10px;

  outline: none;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
  border-radius: 6px;
  font-size: 1.2rem;
  color: #d6d6ba;

  /* box-shadow: 0px 2px 10px black; */

  &:focus {
    background-color: rgb(91 97 91);
    border: 0.2px solid gray;
    color: #d6d6ba;
  }
`

export const SingLink = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: white;

  a {
    cursor: pointer;
    color: white;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
`
