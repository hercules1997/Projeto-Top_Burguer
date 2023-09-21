import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import paths from '../../../constants/paths'
import apiTopBurguer from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './style'

export function EditCategory () {
  const [fileName, setFileName] = useState(null)
  const {
    push,
    location: {
      state: { category }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string()
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

    await toast.promise(
      apiTopBurguer.put(`categories/${category.id}`, productDataFormData),
      {
        pending: 'Editando categoria...',
        success: 'Categoria editado com sucesso!',
        error: 'Falha ao editar o categoria'
      }
    )

    setTimeout(() => {
      push(paths.ListCategory)
    }, 1000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={category.name}
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
        <div>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Editar categoria</ButtonStyle>
      </form>
    </Container>
  )
}
