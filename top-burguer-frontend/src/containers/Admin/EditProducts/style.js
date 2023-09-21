import ReactSelect from 'react-select'
import styled from 'styled-components'

import { Button } from '../../../components/Button'
export const Container = styled.div`
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    background: #2a2a2aba;
    padding: 35px;
    justify-content: space-around;
    border-radius: 18px;
    color: white;
    width: 700px;
    height: 500px;
    gap: 20px;
  }
`

export const Label = styled.p`
  font-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 12px;
  outline: none;
  border-radius: 10px;
  border: none;
  border: ${(props) => (props.error ? '2px solid yellow' : 'none')};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
export const InputCheckBox = styled.input`
  margin-right: 10px;
`

export const ButtonStyle = styled(Button)`
  font-size: 16px;
  padding: 10px;
  width: 100%;
  margin-top: 0;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: ${(props) => (props.error ? '3px solid yellow' : 'dashed 3px black')};
  border-radius: 12px;
  padding: 8px;
  gap: 3px;
  text-align: center;
  justify-content: center;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const ReactSelectStyles = styled(ReactSelect)`
  color: black;
  margin-bottom: 10px;
  .css-1nmdiq5-menu {
    background-color: black;
    outline: none;

    color: white;
  }

  .css-13cymwt-control {
    background: black;
  }
`
