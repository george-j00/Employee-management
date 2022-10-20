const BASE_URL = "http://localhost:3000"

export const getUser = async () => {
    const response = await fetch(`${BASE_URL}/api/user`)
    const data = response.json()
    return data
}



export const addUser = ({formdata}) => {
  
}



