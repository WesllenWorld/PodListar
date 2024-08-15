import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service'
import { ContentType } from '../utils/content-type'
import { FilterPodcastModel } from '../models/filter-podcast-model'

const defaultContent = {'Content-Type': ContentType.JSON}

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodes()
    response.writeHead(content.statusCode, defaultContent)
    response.write(JSON.stringify(content.body))
    response.end()
}

export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) =>{
    
    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url)

    response.writeHead(content.statusCode, defaultContent)
    response.write(JSON.stringify(content.body))
    response.end()
}