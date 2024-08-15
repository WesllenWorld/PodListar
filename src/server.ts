import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //valor de querystring para o endpoint /api/episode
    //http://localhost:3333/api/episode?p=Flow

    const url = request.url ?? ""

    const [baseUrl, queryString] = url.split("?") ?? ["", ""]

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}

)

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server started and listening port ${port}`)
})