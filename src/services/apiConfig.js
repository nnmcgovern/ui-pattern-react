import axios from "axios"

const url = "https://api.nasa.gov/planetary/apod"
const key = "0DSMoYLyETrZC5TEO2k85OZtx7x7FQrlyUo9Cs5h"
const countRetrieved = 20

const api = axios.create({
  baseURL: `${url}?api_key=${key}&count=${countRetrieved}`
})

export default api