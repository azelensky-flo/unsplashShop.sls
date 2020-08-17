import { GetSearchService } from '@services/get-search.service';
import { AppError, CommonErrors } from '@helper/app-error';
import { SearchService } from './search.service';


export class SearchManager {
  private readonly service: SearchService;

  constructor() {
    this.service = new SearchService()
  }

  getSearch(params, getSearchService: GetSearchService) {

    if (!params) {
      throw new AppError(CommonErrors.BadRequest, "The param 'url' is required.");
    }

    return this.service.getSearch(params, getSearchService)

  }

}
