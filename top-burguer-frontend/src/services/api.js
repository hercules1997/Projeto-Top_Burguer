import axios from 'axios'

const apiTopBurger = axios.create({
  baseURL: 'https://top-burguer-backend-production.up.railway.app/'
})

apiTopBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('topBurguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiTopBurger
