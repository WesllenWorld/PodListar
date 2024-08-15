import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodes()
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(content)
    )
}

export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) =>{
    
    const queryString = request.url?.split("?p=")[1] ?? ""
    console.log(queryString)
    console.log('w')
    const content = await serviceFilterEpisodes(queryString)

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(content)
    )
}