import { GetSearchService } from '@services/get-search.service';
import { AppError, CommonErrors } from '@helper/app-error';


export class SearchService {

  async getSearch(params, getSearchService: GetSearchService) {

    let pictures;

    try {
      pictures = await getSearchService.getSearch(params);

    } catch (e) {

      throw new AppError(CommonErrors.InternalServerError, e.message)

      if (!pictures) {
        throw new AppError(CommonErrors.BadRequest, "Can't extract media info. Please, check your URL")
      }
    }
    return pictures
  }
}
