import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //valor de querystring para o endpoint /api/episode
    //http://localhost:3333/api/episode?p=Flow

    /* if(!request.url){
        response.writeHead(404, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({message: "Endpoint not found"}))
        return
    } */

    const url = request.url ?? ""

    const [baseUrl, queryString] = url.split("?") ?? ["", ""]

    console.log(baseUrl)
    console.log(queryString)

    if (request.method === "GET" && baseUrl === "/api/list") {
        await getListEpisodes(request, response)
    }
    if (request.method === "GET" && baseUrl === "/api/episode") {
        await getFilterEpisodes(request, response)
    }
}

)

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server started and listening port ${port}`)
})