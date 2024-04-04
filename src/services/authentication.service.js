import { httpService } from "./http.service"

const endpoint = "auth"

async function signup(firstName, lastName, nickname, avatar, password) {
  if (firstName && lastName && nickname && password) {
    try {
      const user = await httpService.sendRequest(
        httpService.requestTypes.post,
        endpoint + "/signup",
        { firstName, lastName, nickname, avatar, password }
      )
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

async function login(nickname, password) {
  try {
    const user = await httpService.sendRequest(
      httpService.requestTypes.post,
      endpoint + "/login",
      { nickname, password }
    )
    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function logout(nickname) {
  if (!nickname) return
  try {
    await httpService.sendRequest(
      httpService.requestTypes.post,
      endpoint + "/logout"
    )
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const authenticationService = { login, logout, signup }
