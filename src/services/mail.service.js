import { httpService } from "./http.service"

const ENDPOINT = "mail"

async function query(filter) {
  try {
    const mails = await httpService.sendRequest(
      httpService.requestTypes.get,
      ENDPOINT,
      filter
    )
    return mails
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const mailService = {
  query,
}
