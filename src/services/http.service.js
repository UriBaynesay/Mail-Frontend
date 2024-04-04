import Axios from "axios"

const axios = Axios.create({ withCredentials: true })
const baseUrl =
  process.env.CONFIG === "production" ? "/api/" : "http://localhost:3030/api/"
const requestTypes = {
  get: "get",
  post: "post",
  put: "put",
  remove: "delete",
}

/**
 *
 * @param {string} type the type of request get, post, put, delete
 * @param {string} endpoint the url of the request
 * @param {*} data
 * @returns
 */
async function sendRequest(type = "get", endpoint, data = {}) {
  try {
    const res = await axios({
      url: baseUrl + endpoint,
      data,
      params: type === "get" ? data : {},
      method: type,
    })
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const httpService = {
  sendRequest,
  requestTypes,
}
