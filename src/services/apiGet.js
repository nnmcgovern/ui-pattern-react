import api from "./apiConfig.js"

export const getImages = async () => {
  try {
    const response = await api.get()
    return response.data
  }
  catch (err) {
    console.log("Error getting images: ", err)
  }
}