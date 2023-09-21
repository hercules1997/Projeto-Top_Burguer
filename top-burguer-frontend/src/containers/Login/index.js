import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import ImgBurguer from '../../assets/backgroundBurger.jpg'
import logoBurguer from '../../assets/topBurger.png'
import { Button, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import apiTopBurger from '../../services/api'
import {
  Container,
  Background,
  ContainerItens,
  Logo,
  Label,
  Input,
  SingLink
} from './style'

export function Login () {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      apiTopBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem-vindo(a)!',
        error: 'Dados incorretos'
      }
    )

    putUserData(data)
    setTimeout(() => {
      if (data.admin) {
        history.push(paths.Order)
      } else {
        history.push(paths.HomeInit)
      }
    }, 1000)
  }

  return (
    <Container>
      <Background>
        <img src={ImgBurguer} />
      </Background>

      <ContainerItens>
        <Logo src={logoBurguer} />

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
          <SingLink>
            Não tem cadastro ainda?
            <Link to={paths.Register}>Cadastre-se agora!</Link>
          </SingLink>
        </form>
      </ContainerItens>
    </Container>
  )
}
