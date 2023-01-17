import myAxios from './apiConfig'

export function getRequest<T>(path: string, params?: unknown) {
  return new Promise<T>((resolve, reject) => {
    myAxios
      .get(`${path}/${params}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
