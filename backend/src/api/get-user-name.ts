import { defineHandler } from "nitro"

export default defineHandler(async (event) => {
  return {
    name: event.context.user?.name,
  }
})
