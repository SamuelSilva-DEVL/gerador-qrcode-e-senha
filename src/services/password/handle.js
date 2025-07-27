import permitterCharacters from "./utils/permitted-characters.js"

async function handle() {
  let characters = []
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH

  characters = await permitterCharacters()

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)

    password += characters[index]
  }

  return password
}

export default handle
