import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"
import * as http from "http"



export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const url = request.url ?? ""

    const [baseUrl, queryString] = url.split("?") ?? ["", ""]

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}