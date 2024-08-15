import { repoPodcast } from "../repositories/podcast-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model"
import { StatusCode } from "../utils/http-status-code"


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {

    //return interface
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    //fetch data
    const queryString = podcastName?.split("?p=")[1] ?? ""
    const data = await repoPodcast(queryString)


    //check response type
    //response.Format.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    if (data.length != 0) {
        responseFormat.statusCode = StatusCode.OK
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }
    responseFormat.body = data

    return responseFormat
}