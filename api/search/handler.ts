import { SearchManager } from './search.manager';
import { log } from '@helper/logger';
import { GetSearchService } from '@services/get-search.service';
import { errorHandler } from '@helper/error-handler';


export async function getSearch(event) {

  log('getSearch', event);

  try {

    const searchManager = new SearchManager();
    const params = event.query;
    const getSearchService = new GetSearchService();

    console.log(params);

    return await searchManager.getSearch(params, getSearchService);

  } catch (e) {

    errorHandler(e);

  }

}
