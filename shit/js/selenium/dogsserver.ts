import { serve } from "https://deno.land/std/http/server.ts"
const server = serve({ port: 8000 })
const dogdb: object = {
  "dog": "COOLDOG",
  "dog2": "NOTCOOLDOG",
  "	dog3": "DERPEPEGADOG",
  "	dog4": "FEELSBADMANDOG",
  "	dog5": "COOLSHEEEESHDOG",
}

const findDog = (dog) => {
}

const respondForDoggySearch = (req: ServerRequest): Promise<void> => {

	let dog = await findDog(req.)

	return req.respond()
}
const handleErrSearch = (err) => {
	throw new Error(`Could not find your doggy: ${err}`)
}


for await (const req of server) {
	if (req.method === "GET" && req.url === "/search") 	
		respondForDoggySearch(req)
		return
	}
	handleErrSearch(req)
}
