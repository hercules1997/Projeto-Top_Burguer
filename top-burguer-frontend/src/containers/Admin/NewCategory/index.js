import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import paths from '../../../constants/paths'
import apiTopBurguer from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload
} from './style'

export function NewCategory () {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    price: Yup.string().required('Preço obrigatório'),
    category: Yup.object().required('Categoria obrigatória'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => {
        return value?.length > 0
      })
      .test(
        'fileSize',
        'Arquivo muito grande! Por favor, carregue menor que 2MB',
        (value) => {
          return value[0]?.size <= 200000
        }
      )
      .test('type', 'Carregue arquivos apenas jpeg/png', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('file', data.file[0])

    await toast.promise(apiTopBurguer.post('categories', productDataFormData), {
      pending: 'Criando nova categoria...',
      success: 'Categora criada com sucesso!',
      error: 'Falha ao criar o categoria'
    })

    setTimeout(() => {
      push(paths.ListCategory)
    }, 3000)
  }

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiTopBurguer.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregar imagem
              </>
            )}

            <Input
              type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
              error={errors.file?.message}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Adiconar produto</ButtonStyle>
      </form>
    </Container>
  )
}
