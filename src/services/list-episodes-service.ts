import { FilterPodcastModel } from "../models/filter-podcast-model"
import { repoPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/http-status-code"



export const serviceListEpisodes= async (
): Promise<FilterPodcastModel> => {

    //return interface
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    //fetch data
    const data = await repoPodcast()

    //check response type
    if (data.length != 0) {
        responseFormat.statusCode = StatusCode.OK
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }
    responseFormat.body = data

    return responseFormat
}